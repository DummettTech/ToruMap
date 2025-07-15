import { en, no } from "../data/translations/static.js";
import { getCurrentLang } from "./languageUtils";

export function getCurrentTranslationData() {
  const lang = getCurrentLang();
  if (lang === "en") return en;
  if (lang === "no") return no;
  return no; // fallback
}
