import Container from "@/src/app/_components/container";
import { EXAMPLE_PATH } from "@/src/lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Alert = () => {
  const t = useTranslations("Alert");

  return (
    <div className={""}>
      <Container>
        <div className="w-1/2 m-auto pb-2 text-center">
          {t("sourceCodeAvailable")}{" "}
          <Link
            href={`https://github.com/jakChi/Sci-Log/${EXAMPLE_PATH}`}
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            {t("sourceLink")}
          </Link>
          .
        </div>
      </Container>
    </div>
  );
};

export default Alert;
