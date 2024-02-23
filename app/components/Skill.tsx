import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const items = [
  { title: "Node.js", year: "", description: "" },
  { title: "Next.js", year: "", description: "" },
  { title: "NestJs", year: "", description: "" },
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
