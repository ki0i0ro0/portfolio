import styles from "./page.module.css";
import Contact from "./components/Contact";
import Qualifications from "./components/Qualifications";
import Header from "./components/Header";

const sections = [
  { title: "プロフィール", url: "#profile" },
  { title: "スキル", url: "#skills" },
  { title: "資格", url: "#qualifications" },
  { title: "コンタクト", url: "#contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <img
          className={styles.fullWidthImage}
          src="/background.jpg"
          alt="ウユニ塩湖"
        />
      </div>
      <Header sections={sections}></Header>
      <div className="contents">
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
      </div>
    </main>
  );
}
