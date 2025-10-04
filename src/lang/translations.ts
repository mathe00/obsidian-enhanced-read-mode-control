// src/lang/translations.ts

import { moment } from 'obsidian';
import type EnhancedReadModeControlPlugin from '../main';

// Import language files
import en from './en';
import fr from './fr';
import ar from './ar';
import cs from './cs';
import de from './de';
import el from './el';
import es from './es';
import fa from './fa';
import fi from './fi';
import fil from './fil';
import ha from './ha';
import hi from './hi';
import hu from './hu';
import id from './id';
import ig from './ig';
import it from './it';
import ja from './ja';
import ko from './ko';
import ms from './ms';
import nl from './nl';
import pl from './pl';
import pt from './pt';
import ro from './ro';
import ru from './ru';
import sv from './sv';
import sw from './sw';
import th from './th';
import tr from './tr';
import uk from './uk';
import ur from './ur';
import vi from './vi';
import yo from './yo';
import zh from './zh'; // Simplified Chinese
import zht from './zht'; // Traditional Chinese
import bn from './bn';

// Define the structure of the translation object (can be nested)
export interface LanguagePack {
    [key: string]: string | { [key: string]: string };
}

// Register all available languages with their translation objects
const translations: Record<string, LanguagePack> = {
	en, fr, ar, cs, de, el, es, fa, fi, fil, ha, hi, hu, id, ig, it, ja, ko, ms, nl, pl, pt, ro, ru, sv, sw, th, tr, uk, ur, vi, yo, zh, zht, bn
};

// Define display names for languages (in their own language ideally, or English)
// This is used for the language selection dropdown.
export const PURE_AVAILABLE_LANGUAGES: Record<string, string> = {
    en: "English",
    fr: "Français",
    es: "Español",
    de: "Deutsch",
    zh: "简体中文", // Simplified Chinese
    ar: "العربية",
    pt: "Português",
    ru: "Русский",
    ja: "日本語",
    hi: "हिन्दी",
    ko: "한국어",
    it: "Italiano",
    tr: "Türkçe",
    id: "Bahasa Indonesia",
    pl: "Polski",
    bn: "বাংলা",
    ur: "اردو",
    vi: "Tiếng Việt",
    th: "ไทย",
    fil: "Filipino",
    fa: "فارسی",
    ms: "Bahasa Melayu",
    nl: "Nederlands",
    uk: "Українська",
    el: "Ελληνικά",
    sv: "Svenska",
    fi: "Suomi",
    hu: "Magyar",
    ro: "Română",
    cs: "Čeština",
    sw: "Kiswahili",
    ha: "Hausa",
    yo: "Yorùbá",
    ig: "Igbo",
    zht: "繁體中文", // Traditional Chinese
};

let activeTranslations: LanguagePack = en; // Default to English
let currentLanguageCode = 'en';


export function getAvailableLanguages(): Record<string, string> {
    // 'auto' key should also be translated if possible, or use a fixed string.
    // For simplicity, using the key from en.ts or a fallback.
    const autoDetectLabel = t('LANG_AUTO_DETECT_OBSIDIAN');
    const langs: Record<string, string> = { auto: autoDetectLabel };
    for (const code in PURE_AVAILABLE_LANGUAGES) {
        langs[code] = PURE_AVAILABLE_LANGUAGES[code];
    }
    return langs;
}

export function getCurrentLanguage(): string {
    return currentLanguageCode;
}

/**
 * Loads the translations based on the plugin setting or Obsidian's locale.
 * @param plugin The instance of the plugin to access settings.
 */
export function loadTranslations(plugin: EnhancedReadModeControlPlugin): void {
	const userChoice = plugin.settings.pluginLanguage;
	let targetLocale: string | null = null;

	plugin.logDebug(`User language choice: ${userChoice}`);

	// 1. Check user's explicit choice in settings
	if (userChoice && userChoice !== 'auto' && translations[userChoice]) {
		targetLocale = userChoice;
		plugin.logDebug(`Using locale from plugin setting: ${targetLocale}`);
	}
	// 2. If choice is 'auto' or invalid, use detection logic
	else {
        // Obsidian's moment.locale() is the most reliable way to get the current UI language
		const momentLocale = moment.locale();
		plugin.logDebug(`Plugin language set to 'auto'. Obsidian (moment.locale()): ${momentLocale}`);

		if (momentLocale) {
			targetLocale = momentLocale;
		} else {
			plugin.logDebug(`moment.locale() is unavailable.`);
		}
	}

	// Now, load translations based on the determined targetLocale
	if (targetLocale && translations[targetLocale]) {
		// Exact match (e.g., 'fr', 'en')
		activeTranslations = translations[targetLocale];
        currentLanguageCode = targetLocale;
		plugin.logDebug(`Loaded translations for exact locale '${targetLocale}'`);
	} else if (targetLocale) {
		// Try base language if exact match failed (e.g., 'en' from 'en-gb')
		const baseLocale = targetLocale.split("-")[0];
		if (translations[baseLocale]) {
			activeTranslations = translations[baseLocale];
            currentLanguageCode = baseLocale;
			plugin.logDebug(`Loaded translations for base locale '${baseLocale}' (from '${targetLocale}')`);
		} else {
			// Fallback to English if neither exact nor base locale is found
			activeTranslations = en;
            currentLanguageCode = 'en';
			plugin.logDebug(`Locale '${targetLocale}' (or base '${baseLocale}') not found, falling back to 'en'.`);
		}
	} else {
		// Fallback to English if no locale could be determined
		activeTranslations = en;
        currentLanguageCode = 'en';
		plugin.logDebug(`No target locale determined, falling back to 'en'.`);
	}
}

/**
 * Gets the translated string for a given key.
 * Supports dot notation for nested keys (e.g., "settings.title").
 * Falls back to English if the key is not found in the current language.
 * @param key The key for the translation string.
 * @param vars Optional_ A dictionary of variables to replace in the string.
 * @returns The translated string or the key itself if not found.
 */
export function t(key: string, vars?: Record<string, string>): string {
    let text: string | Record<string, string | Record<string, string>> | undefined = activeTranslations; // Use activeTranslations
    const keyParts = key.split('.');
    for (const part of keyParts) {
        if (text && typeof text === 'object' && part in text) {
            text = text[part];
        } else {
            text = undefined;
            break;
        }
    }

    if (typeof text !== 'string') {
        // Fallback to English if key not found in current language
        let fallbackText: string | Record<string, string | Record<string, string>> | undefined = en; // Default to English pack
        for (const part of keyParts) {
            if (fallbackText && typeof fallbackText === 'object' && part in fallbackText) {
                fallbackText = fallbackText[part];
            } else {
                fallbackText = undefined;
                break;
            }
        }
        if (typeof fallbackText === 'string') {
            text = fallbackText;
        } else {
            // console.warn(`Translation key "${key}" not found in language "${currentLanguageCode}" or fallback "en".`);
            return key; // Return the key itself if not found anywhere
        }
    }

    if (vars) {
        for (const varKey in vars) {
            text = text.replace(new RegExp(`{${varKey}}`, 'g'), vars[varKey]);
        }
    }
    return text;
}
