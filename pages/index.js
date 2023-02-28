import ReactMarkdown from "react-markdown";
import { Countdown } from "../components/Countdown";
import { getPageMD } from "../utils/load-md";

export default function Home({ data }) {
  return (
    <>
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <Countdown />
    </>
  );
}

export async function getStaticProps() {
  const data = getPageMD("home");
  return {
    props: {
      data,
    },
  };
}


