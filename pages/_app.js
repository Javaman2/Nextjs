import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return(
  <div>
    <h1>On every page</h1>
    <Component {...pageProps} />
  </div>
  );
}
