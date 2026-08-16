import { notFound } from "next/navigation";
import { AnatomyApp } from "../components/AnatomyApp";
import { getDictionary } from "../i18n/dictionaries";
import { getLocale, isLocale } from "../i18n/config";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  return <AnatomyApp locale={getLocale(locale)} dictionary={dictionary} />;
}
