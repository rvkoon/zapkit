import type { GetStaticPropsContext } from "next";

export default function IndexPage() {
  return <h1>Hello World</h1>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`public/messages/${locale}.json`)).default,
    },
  };
}
