import { SignUpPage } from "@Signup";
import type { GetStaticPropsContext } from "next";
export default SignUpPage

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
      props: {
        messages: (await import(`public/messages/${locale}.json`)).default,
        withNavigation: false
      },
    };
  }