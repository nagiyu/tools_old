import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ホーム画面</h1>
        <p>本アプリはツールをまとめたものです。以下のツール一覧から選択してください。</p>
        <div className={styles.ctas}>
          <Link href="/convert-transfers">
            <a className={styles.primary}>乗り換え変換ツール</a>
          </Link>
          <Link href="/create-bibliography">
            <a className={styles.primary}>参考文献つくーる</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

