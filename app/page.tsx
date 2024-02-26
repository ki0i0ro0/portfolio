import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./page.module.css";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Profile from "./components/Profile";
import Qualifications from "./components/Qualifications";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Code from "./components/Code";

const sections = [
  { title: "プロフィール", url: "profile", component: <Profile /> },
  { title: "スキル", url: "skills", component: <Skill /> },
  { title: "コード", url: "code", component: <Code /> },
  { title: "資格", url: "qualifications", component: <Qualifications /> },
  { title: "コンタクト", url: "contact", component: <Contact /> },
];

export default function Home() {
  return (
    <>
      <CssBaseline />
      <img
        className={styles.fullWidthImage}
        src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/background.jpg`}
        alt="ウユニ塩湖"
      />
      <Container maxWidth="lg">
        <Grid marginBottom={10}>
          <Header sections={sections} />
        </Grid>
        <main>
          {sections.map((section) => (
            <section id={section.url} key={section.url}>
              <Grid marginBottom={10}>{section.component}</Grid>
            </section>
          ))}
        </main>
      </Container>
      <Footer title="" description="" />
    </>
  );
}
