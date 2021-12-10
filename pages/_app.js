import { Provider } from "react-redux";
import { ConfigProvider, Layout } from "antd";
import { useStore } from "../store";
import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/style.scss";

// ConfigProvider.config({
//   theme: {
//     primaryColor: "#5282a5",
//   },
// });
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ConfigProvider>
        <Layout>
          <Head>
            <link rel="icon" href="/favicon.jpeg" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  );
}
