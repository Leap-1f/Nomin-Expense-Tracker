import "@/styles/globals.css";
import { ArticleProvider } from "../components/layout/Context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ArticleProvider>
        <Component {...pageProps} />
      </ArticleProvider>
    </>
  );
}
