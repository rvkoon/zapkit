import { APP_ROUTES } from "@Navigation";
import { Typography, Container, Box } from "@Ui";
import { useTranslations } from "next-intl";
import Link from "next/link";

export interface IHomePageProps {}

export function HomePage({}) {
  const t = useTranslations("home");

  return (
    <Container>
      <Box>
        <Typography variant="h2" content={t("pageTitle")} />
        <Link href={APP_ROUTES.SIGNUP.PATH}>SignUp</Link>
      </Box>
    </Container>
  );
}
