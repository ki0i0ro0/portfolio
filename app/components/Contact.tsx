import { Link, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {
  return (
    <section id="contact">
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        <PhoneIcon />
        コンタクト
      </Typography>
      <Typography variant="body1">
        X(旧：twitter)のDMからご連絡ください。
        <Link
          href="https://twitter.com/ki0i0ro0"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ki0i0ro0
        </Link>
      </Typography>
    </section>
  );
}

export default Contact;
