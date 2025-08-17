import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
// import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Footer from "../_components/footer";
import { Navbar } from "../_components/navbar";

import { routing } from "@/src/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // // Ensure Next.js renders with the right locale
  // setRequestLocale(locale);

  // // Load messages for this locale
  // const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={"dark:bg-slate-900 dark:text-slate-400"}>
        <Navbar />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
