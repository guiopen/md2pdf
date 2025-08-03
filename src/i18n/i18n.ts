import en from "./content/en.json";
import ptBR from "./content/pt-br.json";

type Translation = typeof en;

const TRANSLATIONS = {
    "pt-br": ptBR,
    "en": en,
};

type Locale = keyof typeof TRANSLATIONS;

export function getTranslations(locale: string | undefined): Translation {
    if (locale && locale in TRANSLATIONS) {
        return TRANSLATIONS[locale as Locale];
    }

    return TRANSLATIONS["en"];
}