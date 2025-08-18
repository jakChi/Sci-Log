import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ka', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});

// export const locales = ['en', 'ka'] as const;
// export type Locale = typeof locales[number];
// export const defaultLocale: Locale = 'ka';
