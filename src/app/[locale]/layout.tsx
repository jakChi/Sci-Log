import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
// import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Footer from "../_components/footer";
import { routing } from "@/src/i18n/routing";
import { SidePill } from "../_components/side-pill";

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
      <body
        className={
          "bg-[var(--color-background)] text-[var(--color-foreground)]"
        }
      >
        <SidePill />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
