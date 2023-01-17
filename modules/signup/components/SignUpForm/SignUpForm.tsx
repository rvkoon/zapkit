import { useCreateUser } from "@Api";
import { Button, InputText, Spinner } from "@Ui";
import { FormikErrors, useFormik } from "formik";
import { MAIL_VALIDATOR, PASSWORD_VALIDATOR } from "../../constants";
import { useTranslations } from "next-intl";

export interface ISignUpFormProps {}
export type SignUpFormValues = {
  email: string;
  password: string;
};

export function SignUpForm({}: ISignUpFormProps): JSX.Element {
  const t = useTranslations("signUp.form");

  const { createUser, isCreatingUser } = useCreateUser();

  const { values, handleChange, handleSubmit, errors, isSubmitting } =
    useFormik({
      initialValues: { email: "", password: "" } as SignUpFormValues,
      onSubmit: (
        values: SignUpFormValues,
        { setSubmitting }: { setSubmitting: (v: boolean) => void }
      ) => {
        createUser(values);
        setSubmitting(false);
      },
      validate: ({ email, password }: SignUpFormValues) => {
        const errors = { email: "", password: "" };
        if (!email) {
          errors.email = t("fields.email.errors.empty");
        }
        if (!MAIL_VALIDATOR.FORMAT.test(email)) {
          errors.email = t("fields.email.errors.invalid");
        }
        if (!password) {
          errors.password = t("fields.password.errors.empty");
        }
        if (password.length < PASSWORD_VALIDATOR.LENGTH) {
          errors.password = t("fields.password.errors.tooShort");
        }
        if (errors.email || errors.password) {
          return errors;
        }
        return {};
      },
      validateOnChange: false,
      validateOnBlur: false,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 my-3"
      data-testid="signUpForm"
    >
      <InputText
        type="email"
        name="email"
        label={t("fields.email.label")}
        placeholder={t("fields.email.placeholder")}
        value={values.email}
        onChange={handleChange}
        error={errors.email as FormikErrors<string>}
      />
      <InputText
        type="password"
        name="password"
        label={t("fields.password.label")}
        placeholder={t("fields.password.placeholder")}
        value={values.password}
        onChange={handleChange}
        error={errors.password as FormikErrors<string>}
      />
      <Button
        type="submit"
        content={isCreatingUser ? <Spinner /> : t("submit.label")}
        disabled={isSubmitting}
        testId="signUpFormSubmitButton"
      />
    </form>
  );
}
