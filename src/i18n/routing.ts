import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ka'],
 
  // Used when no locale matches
  defaultLocale: 'ka'
});

// export const locales = ['en', 'ka'] as const;
// export type Locale = typeof locales[number];
// export const defaultLocale: Locale = 'ka';
