import day1Eng from "../data/translations/day1/eng.js";
import day1No from "../data/translations/day1/no.js";
import day2Eng from "../data/translations/day2/eng.js";
import day2No from "../data/translations/day2/no.js";

function getCurrentLang() {
  const defaultLang = "no";
  const url =
    window.location != window.parent.location
      ? document.referrer
      : document.location.href;
}

// TODO: move out to lang helper
export function getCurrentTranslationData() {
  // get current date/time, translate to day1|day2
  // const currentLang = getCurrentLang();
  if (false) {
    return day2Eng;
  }

  return day1Eng;
}
