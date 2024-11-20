import { useTranslations } from "next-intl";
import React from "react";
// import LocalSwitcher from "./local-switcher";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link href="/about">{t("about")}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
