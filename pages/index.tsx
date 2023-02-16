import type { GetStaticPropsContext } from "next";
import { HomePage } from "@Home";
export default HomePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`public/messages/${locale}.json`)).default,
    },
  };
}
