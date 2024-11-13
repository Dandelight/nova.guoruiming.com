import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import styles from "./app.module.scss";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <>
          <nav class={styles.nav}>
            <div class={styles.navContent}>
              <a href="/" class={styles.navLink}>
                Home
              </a>
              <a href="/about" class={styles.navLink}>
                About
              </a>
            </div>
          </nav>
          <main class={styles.main}>
            <Suspense>{props.children}</Suspense>
          </main>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
