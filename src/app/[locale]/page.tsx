import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="container">
      <h1 className="font-bold">{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
