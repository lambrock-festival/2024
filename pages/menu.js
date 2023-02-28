import { getPageMD } from "../utils/load-md";
import { Book } from "../components/Book";
import ReactMarkdown from "react-markdown";


export default function Menu({ data }) {
    return (
        <>
            <ReactMarkdown>{data.content}</ReactMarkdown>
            <Book />
        </>
    );
}

export async function getStaticProps() {
    const data = getPageMD("menu");
    return {
        props: {
            data,
        },
    };
}
