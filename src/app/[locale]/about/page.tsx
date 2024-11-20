import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AboutPage");
  return (
    <div className="container">
      <h1 className="font-bold">{t("title")}</h1>
    </div>
  );
}
