import { Typography, Container, Box } from "@Ui";
import { useTranslations } from "next-intl";

export interface IHomePageProps {}

export function HomePage({}) {
  const t = useTranslations("home");

  return (
    <Container>
      <Typography variant="h2" content={t("pageTitle")} />
      <Typography content={t("pageDescription")} />
    </Container>
  );
}
