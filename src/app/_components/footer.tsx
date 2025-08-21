import Container from "@/src/app/_components/container";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import obsidian from "@/public/favicon/obsidian.svg";
import notion from "@/public/favicon/notion.svg";
import dillinger from "@/public/favicon/dillinger.ico";
import jekyllpad from "@/public/favicon/jekyllpad.png";
import vscode from "@/public/favicon/vscode.svg";
import barelyhuman from "@/public/favicon/barelyhuman.svg";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-[95%] mx-auto my-8">
      <Container>
        <div>
          <p
            id="contribution"
            className="text-center text-sm text-neutral-500 dark:text-neutral-400"
          >
            {t("contribution")}
          </p>
          <div id="editors" className="m-auto flex justify-center gap-4 mt-4 ">
            <Link href={"https://www.notion.com"} target="_blank">
              <Image
                src={notion}
                width={50}
                height={50}
                alt={t("editors.notion")}
              />
            </Link>
            <Link href={"https://www.obsidian.md"} target="_blank">
              <Image
                src={obsidian}
                width={50}
                height={50}
                alt={t("editors.obsidian")}
              />
            </Link>
            <Link href={"https://mark.barelyhuman.dev"} target="_blank">
              <Image
                src={barelyhuman}
                width={50}
                height={50}
                alt={t("editors.barelyhuman")}
              />
            </Link>

            <Link href={"https://dillinger.io"} target="_blank">
              <Image
                src={dillinger}
                width={50}
                height={50}
                alt={t("editors.dillinger")}
              />
            </Link>
            <Link href={"https://www.jekyllpad.com"} target="_blank">
              <Image
                src={jekyllpad}
                width={50}
                height={50}
                alt={t("editors.jekyllpad")}
              />
            </Link>
            <Link href={"https://vscode.dev"} target="_blank">
              <Image
                src={vscode}
                width={50}
                height={50}
                alt={t("editors.vscode")}
              />
            </Link>
          </div>
        </div>

        <div
          id="editors-disclaimers"
          className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4"
        >
          <p>{t("editorsDisclaimer")}</p>
          <p>{t("editorsDisclaimer2")}</p>
        </div>
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          <p id="built-with">
            {t("builtWith")}{" "}
            <Link
              href="https://nextjs.org"
              className="text-neutral-900 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("nextjs")}
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com"
              className="text-neutral-900 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("tailwindcss")}{" "}
            </Link>
            <Link
              href="https://vercel.com"
              className="text-neutral-900 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("vercel")}
            </Link>
            .
          </p>
        </div>
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          <p id="open-source">
            {t("openSource")}{" "}
            <Link
              href="  "
              className="text-neutral-900 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("github")}
            </Link>
            .
          </p>
        </div>
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          <p id="contact">
            {t("contact")}{" "}
            <Link
              href="mailto:kobachincharauli8@gmail.com"
              className="text-neutral-900 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("email")}
            </Link>
            .
          </p>
        </div>
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p id="copyright">
            © {new Date().getFullYear()} {t("copyright")}{" "}
          </p>
          <p id="made-by">
            {t("madeBy")}{" "}
            <Link
              href=""
              className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("author")}
            </Link>
          </p>
          <p id="legal">
            <Link
              href="  "
              className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("legal.privacyPolicy")}
            </Link>
            {" | "}
            <Link
              href=" "
              className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-100"
            >
              {t("legal.termsOfService")}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
