import { Typography, Container, Box } from "@Ui";
import { useTranslations } from "next-intl";

export interface IStorePageProps {}

export function StorePage({}) {
  const t = useTranslations("store");

  return (
    <Container>
      <Box>
        <Typography variant="h2" content={t("pageTitle")} />
      </Box>
    </Container>
  );
}
