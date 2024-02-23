import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Typography } from "@mui/material";

function Qualifications() {
  return (
    <section id="qualifications">
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        <AccountBalanceIcon />
        資格
      </Typography>
      <ul>
        <li>Google Cloud Certified - Professional Cloud Architect</li>
        <li>Google Cloud Certified - Associate Cloud Engineer</li>
      </ul>
    </section>
  );
}

export default Qualifications;
