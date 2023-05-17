import { TaskProvider } from "@/context/taskContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}
