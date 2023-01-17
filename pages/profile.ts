import { ProfilePage } from "@Profile";
import type { GetStaticPropsContext } from "next";
export default ProfilePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`public/messages/${locale}.json`)).default,
    },
  };
}
