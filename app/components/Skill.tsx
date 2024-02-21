import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const items = [{ title: "Node.js" }, { title: "Next.js" }, { title: "NestJs" }];

function Skill() {
  return (
    <section id="skills">
      <h2>スキル</h2>
      <p>Webエンジニアとしてのスキルをここに記述します。</p>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 2,
        }}
      >
        {items.map((value) => (
          <Card key={`${value.title}`}>
            <CardContent>
              <Typography>{value.title}</Typography>
              <Typography>Description of the card.</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  );
}

export default Skill;
