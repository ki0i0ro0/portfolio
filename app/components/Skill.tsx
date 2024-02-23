import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const items = [
  {
    title: "Java Script/Type Script",
    description: "Webフロントエンドの開発の必須言語。",
    year: 7,
  },
  {
    title: "React.js",
    description:
      "Webフロントエンドの開発における最も人気のあるフレームワーク。",
    year: 3,
  },
  {
    title: "Next.js",
    description:
      "React開発におけるフレームワーク。Webサイト配信の最適化やSSRを容易にする。",
    year: 2,
  },
  {
    title: "Vue.js",
    description: "Webフロントエンドの開発におけるフレームワーク。",
    year: "4",
  },
  {
    title: "Nuxt.js",
    description: "Vue.jsのフレームワーク。",
    year: "1",
  },
  {
    title: "Node.js",
    description: "サーバーサイドでJavaScriptを使うためのプラットフォーム。",
    year: 3,
  },
  {
    title: "NestJs",
    description: "Node.jsのフレームワーク。TypeScriptでの開発をサポートする。",
    year: 1,
  },
  {
    title: "DB設計",
    description: "データベースの設計。NoSQL、SQLどちらも経験あり。",
    year: 7,
  },
  {
    title: "GraphQL",
    description: "APIのクエリ言語。REST APIに比べて柔軟な設計が可能。",
    year: 1,
  },
];

function Skill() {
  return (
    <section id="skills">
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        <TipsAndUpdatesIcon />
        スキル
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        Webエンジニアとしてのスキルをここに記述します。
      </Typography>
      <Grid container spacing={4}>
        {items.map((value) => (
          <Grid item xs={12} md={6} key={`${value.title}`}>
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div">
                  {value.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mb: 1.5, fontSize: 14 }}
                >
                  業務使用年数{value.year}年
                </Typography>
                <Typography variant="body2">{value.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Skill;
