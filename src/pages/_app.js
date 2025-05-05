import { TarefaProvider } from "../context/TarefaContext";

export default function App({ Component, pageProps }) {
  return (
    <TarefaProvider>
      <Component {...pageProps} />
    </TarefaProvider>
  );
}
