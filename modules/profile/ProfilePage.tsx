import { Typography, Container, Box } from "@Ui";
import { useTranslations } from "next-intl";

export interface IProfilePageProps {}

export function ProfilePage({}) {
  const t = useTranslations("profile");

  return (
    <Container>
      <Box>
        <Typography variant="h2" content={t("pageTitle")} />
      </Box>
    </Container>
  );
}
