import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

// 루트 경로(/) 접근시 기본 언어로 리다이렉트
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
