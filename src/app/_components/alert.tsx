import Container from "@/src/app/_components/container";
import { EXAMPLE_PATH } from "@/src/lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const t = useTranslations("Alert");

  return (
    <div className={""}>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <Link
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </Link>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              {t("sourceCodeAvailable")}{" "}
              <a
                href={`https://github.com/jakChi/Sci-Log/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                {t("sourceLink")}
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
