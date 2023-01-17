import { Container, Box, Typography } from "@Ui";
import { SignUpForm } from "./components";
import { useTranslations } from "next-intl";

export interface ISignUpPage {}

export function SignUpPage({}: ISignUpPage): JSX.Element {
  const t = useTranslations("signUp");
  return (
    <Container>
      <Box>
        <Typography component="h1" variant="h1" content={t("pageTitle")} />
        <SignUpForm />
      </Box>
    </Container>
  );
}
