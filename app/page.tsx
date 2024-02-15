import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./page.module.css";
import Contact from "./components/Contact";
import Qualifications from "./components/Qualifications";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sections = [
  { title: "プロフィール", url: "#profile" },
  { title: "スキル", url: "#skills" },
  { title: "資格", url: "#qualifications" },
  { title: "コンタクト", url: "#contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <CssBaseline />
      <div className={styles.center}>
        <img
          className={styles.fullWidthImage}
          src="/background.jpg"
          alt="ウユニ塩湖"
        />
      </div>
      <Container maxWidth="lg">
        <Header sections={sections} />
        <div className="contents">
          <Grid sx={{ marginBottom: "300px" }}>
            <section id="profile">
              <h2>プロフィール</h2>
              <p>最適なエンジニアのプロフィールをここに記述します。</p>
            </section>
          </Grid>
          <Grid sx={{ marginBottom: "300px" }}>
            <section id="skills">
              <h2>スキル</h2>
              <p>Webエンジニアとしてのスキルをここに記述します。</p>
            </section>
          </Grid>
          <Grid sx={{ marginBottom: "300px" }}>
            <Qualifications />
          </Grid>
          <Grid sx={{ marginBottom: "300px" }}>
            <Contact />
          </Grid>
        </div>
      </Container>
      <Footer title="" description="" />
    </main>
  );
}
