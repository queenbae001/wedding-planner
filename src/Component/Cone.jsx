import "./Cone.css";
import "@fontsource/dancing-script";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";

export default function Cone() {
  const phoneNumber = "2347030964534";
  const emailAddress = "queenderaokeke@gmail.com";

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hxga24o",     // REPLACE
        "template_zpfywic",    // REPLACE
        formData,
        "7Bdisb_dKQ60SIT_U"      // REPLACE
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });
  };

  const handleWhatsApp = () => {
    const message = `${formData.user_name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Box className="contact-bg">
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={8} className="contact-paper">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="contact-title"
          >
            Contact Me
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon color="primary" />
                <Typography
                  component="a"
                  href={`mailto:${emailAddress}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {emailAddress}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon color="primary" />
                <Typography
                  component="a"
                  href={`tel:+${phoneNumber}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  +234 703 094 534
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <form onSubmit={sendEmail}>
            <TextField
              label="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Your Email"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<SendIcon />}
              sx={{ mt: 2, py: 1.5 }}
            >
              Send Message via Email
            </Button>

            <Button
              onClick={handleWhatsApp}
              variant="outlined"
              color="success"
              fullWidth
              startIcon={<WhatsAppIcon />}
              sx={{ mt: 2, py: 1.5 }}
            >
              Send via WhatsApp
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}