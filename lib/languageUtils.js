import { schedule as enScheduleDay1 } from "../data/translations/day1/eng.js";
import { schedule as noScheduleDay1 } from "../data/translations/day1/no.js";
import { schedule as enScheduleDay2 } from "../data/translations/day2/eng.js";
import { schedule as noScheduleDay2 } from "../data/translations/day2/no.js";

const DEBUG = false;
let unreleased = false;
const day1 = 9;
const day2 = 10;
const prerelease = 7;

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
  const currentDay = getCurrentDateTime().getDate();
  // TODO: add logic for day1/day2
  switch (lang) {
    case "en":
      if (currentDay === day1) {
        return enScheduleDay1;
      } else {
        return enScheduleDay2;
      }
    case "no":
      if (currentDay === day1) {
        return noScheduleDay1;
      } else {
        return noScheduleDay2;
      }
  }
}

// TODO: add typing
export function formatBoothPopupText({ name, socials }) {
  let text = `<strong>${name}</strong><br>`;
  if (Array.isArray(socials) && socials.length) {
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
  const now = getCurrentDateTime();
  // TODO: add styling for text
  name = `${name}` || "Unknown Event Space";
  if (!Array.isArray(scheduleArr) || scheduleArr.length === 0 || unreleased)
    return name;

  //const now = new Date(0, 0, 0, 23, 0, 0);
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

function getCurrentDateTime() {
  if (DEBUG) {
    return new Date(0, 0, 0, 23, 0, 0);
  }

  const now = new Date();

  if (now.getMonth() !== 7) {
    unreleased = true;
    console.warn("Schedule not ready for release this month!");
  }

  if (day2 <= now.getDate()) {
    return now;
  }

  if (day1 - prerelease <= now.getDate()) {
    let modifiedDate = new Date(now);
    modifiedDate.setDate(day1);
    return modifiedDate;
  }

  unreleased = true;
  console.warn("Schedule not ready for release this month!");
}

// TODO: add typing
export function getPopupSchedule(name, scheduleArr) {
  const tbdText = "TBD";
  if (unreleased) {
    return tbdText;
  }

  if (!Array.isArray(scheduleArr) || scheduleArr.length === 0) return tbdText;
  let eventSchedule = `<b>${name}</b>:\n\n`;
  for (let i = 0; i < scheduleArr.length; i++) {
    const event = scheduleArr[i];
    eventSchedule += `${event.startTime} - ${event.endTime} | ${event.name}\n`;
  }
  return eventSchedule;
}
