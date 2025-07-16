import { schedule as enScheduleDay1 } from "../data/translations/day1/eng.js";
import { schedule as noScheduleDay1 } from "../data/translations/day1/no.js";
import { schedule as enScheduleDay2 } from "../data/translations/day2/eng.js";
import { schedule as noScheduleDay2 } from "../data/translations/day2/no.js";

// TODO: add typing
export function getCurrentLang() {
  const switchUrl = "en.torucon.no";
  const defaultLang = "no";
  const url =
    window.location != window.parent.location
      ? document.referrer
      : document.location.href;
  return url && url.includes(switchUrl) ? "en" : defaultLang;
}

// TODO: add typing
export function getScheduleTranslationData() {
  const lang = getCurrentLang();
  // TODO: add logic for day1/day2
  if (lang === "en") return enScheduleDay1;
  if (lang === "no") return noScheduleDay1;
  return enScheduleDay1;
}

// TODO: add typing
export function formatBoothPopupText({ name, socials }) {
  let text = `<strong>${name}</strong>`;
  if (Array.isArray(socials) && socials.length) {
    text += "<br>Socials:<br>";
    text += socials
      .map(
        (s) =>
          `${s.platform}: <a href="${s.link}" target="_blank">${s.name}</a>`
      )
      .join("<br>");
  }
  return text;
}

// TODO: add typing
export function getCurrentAndNextData(name, scheduleArr) {
  // TODO: add styling for text
  name = `${name}` || "Unknown Event Space";
  if (!Array.isArray(scheduleArr) || scheduleArr.length === 0) return name;

  const now = new Date();
  //const now = new Date(0, 0, 0, 17, 0, 0);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  }

  let currentEvent = null;
  let nextEvent = null;

  for (let i = 0; i < scheduleArr.length; i++) {
    const event = scheduleArr[i];
    const start = timeToMinutes(event.startTime);
    const end = timeToMinutes(event.endTime);

    if (currentMinutes >= start && currentMinutes < end) {
      currentEvent = event;
      nextEvent = scheduleArr[i + 1] || null;
      break;
    }
    if (currentMinutes < start && !currentEvent) {
      nextEvent = event;
      break;
    }
  }

  let eventLines = [];
  if (!currentEvent && nextEvent) {
    const nextIdx = scheduleArr.indexOf(nextEvent);
    const secondNext = scheduleArr[nextIdx + 1];
    eventLines = [
      `${nextEvent.startTime} - ${nextEvent.endTime} ${nextEvent.name}`,
      secondNext
        ? `${secondNext.startTime} - ${secondNext.endTime} ${secondNext.name}`
        : null,
    ].filter(Boolean);
  } else if (currentEvent) {
    eventLines = [
      `${currentEvent.startTime} - ${currentEvent.endTime} ${currentEvent.name}`,
      nextEvent
        ? `${nextEvent.startTime} - ${nextEvent.endTime} ${nextEvent.name}`
        : null,
    ].filter(Boolean);
  } else {
    eventLines = [];
  }

  return [name, ...eventLines].join("\n");
}

// TODO: add typing
export function getPopupSchedule(name, scheduleArr) {
  if (!Array.isArray(scheduleArr) || scheduleArr.length === 0) return "TBD";
  let eventSchedule = `<b>${name}</b>:\n\n`;
  for (let i = 0; i < scheduleArr.length; i++) {
    const event = scheduleArr[i];
    eventSchedule += `${event.startTime} - ${event.endTime} | ${event.name}\n`;
  }
  return eventSchedule;
}

export function getNameAndSchedulePopup(name, schedule) {
  return {
    name: () => getCurrentAndNextData(name, schedule),
    popup: getPopupSchedule(name, schedule),
  };
}
