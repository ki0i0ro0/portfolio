import styles from "./page.module.css";
import Contact from "./components/Contact";
import Qualifications from "./components/Qualifications";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <img
          className={styles.fullWidthImage}
          src="/background.jpg" // 大きな画像のパスを指定します
          alt="ウユニ塩湖"
        />
      </div>

      <div className={styles.links}>
        <ul className={styles.horizontalList}>
          <li>
            <a href="#profile">プロフィール</a>
          </li>
          <li>
            <a href="#skills">スキル</a>
          </li>
          <li>
            <a href="#qualifications">資格</a>
          </li>
          <li>
            <a href="#contact">コンタクト</a>
          </li>
        </ul>
      </div>

      <section id="profile">
        <h2>プロフィール</h2>
        <p>最適なエンジニアのプロフィールをここに記述します。</p>
      </section>

      <section id="skills">
        <h2>スキル</h2>
        <p>Webエンジニアとしてのスキルをここに記述します。</p>
      </section>

      <Qualifications />

      <Contact />
    </main>
  );
}
