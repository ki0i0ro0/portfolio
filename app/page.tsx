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
  { title: "プロフィール", url: "#profile" },
  { title: "スキル", url: "#skills" },
  { title: "資格", url: "#qualifications" },
  { title: "コンタクト", url: "#contact" },
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
          <Grid sx={{ marginBottom: "100px" }}>
            <Profile />
          </Grid>
          <Grid sx={{ marginBottom: "100px" }}>
            <Skill />
          </Grid>
          <Grid sx={{ marginBottom: "100px" }}>
            <Code />
          </Grid>
          <Grid sx={{ marginBottom: "300px" }}>
            <Qualifications />
          </Grid>
          <Grid sx={{ marginBottom: "300px" }}>
            <Contact />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
    </>
  );
}
