import Head from "next/head";
import { Content } from "@shared/interface";

type Props = {
  content: Content | null;
};

const ErrorInfo: React.FC<Props> = ({ content }) => {
  const htmlContent = content ? content.content : "";
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel="stylesheet"
        />
      </Head>
      <div>
        <article
          className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16"
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      </div>
    </>
  );
};

export default ErrorInfo;
