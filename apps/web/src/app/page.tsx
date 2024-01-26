import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/large-image.jpg" // 大きな画像のパスを指定します
          alt="Large Image"
          width={800} // 画像の幅を指定します
          height={600} // 画像の高さを指定します
          priority
        />
      </div>

      <div className={styles.links}>
        <ul>
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

      <section id="qualifications">
        <h2>資格</h2>
        <ul>
          <li>Google Cloud Certified - Professional Cloud Architect</li>
          <li>Google Cloud Certified - Professional Data Engineer</li>
          <li>Google Cloud Certified - Professional Cloud Developer</li>
        </ul>
      </section>

      <section id="contact">
        <h2>コンタクト</h2>
        <p>Email: ki0i0ro0@gmail.com</p>
      </section>
    </main>
  );
}
