import { StorePage } from "@Store";
import type { GetStaticPropsContext } from "next";
export default StorePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`public/messages/${locale}.json`)).default,
    },
  };
}
