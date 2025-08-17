// import createMiddleware from 'next-intl/middleware';
// import {locales, defaultLocale} from './src/app/i18n';

// export default createMiddleware({
//   locales,
//   defaultLocale,
//   localePrefix: 'always' // or 'as-needed' if you don't want /geo on default
// });

// export const config = {
//   matcher: ['/', '/(en|ka)/:path*']
// };



import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};