import React, { useState } from "react";
import "./Contact.scss";
import {
  Grid,
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";
import SocialMediaIcons from "../../components/socialMediaIcons/SocialMediaIcons";
import emailjs from "@emailjs/browser"

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  console.log(publicKey)

  const templateParams = {
    from_name: firstName + " " + lastName,
    email: email,
    to_name: "Abiodun Oladoyin",
    message: message
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   firstName: data.get("firstName"),
    //   lastName: data.get("lastName"),
    //   email: data.get("email"),
    //   message: data.get("message"),
    // });
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) =>{
      console.log('Email sent successfully!', response)
      setEmail('')
      setFirstName('')
      setLastName('')
      setMessage('')
    })
    .catch((error) => {
      console.error('Error sending email', error)
    })
  };
  return (
    <div className="contact-page" id="form">
      <Container
        sx={{
          width: {
            md: "50%",
          },
          height: {
            md: "50%",
          },
          backgroundColor: "#116466",
          mt: "15%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            sx={{
              paddingLeft: { md: "10%", lg: "15%" },
              paddingRight: { md: "10%", lg: "15%" },
            }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                sx={{
                  backgroundColor: "#ffcb9a",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                autoComplete="family-name"
                variant="outlined"
                sx={{
                  backgroundColor: "#ffcb9a",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                autoComplete="email"
                variant="outlined"
                sx={{
                  backgroundColor: "#ffcb9a",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                name="message"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#ffcb9a",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#2c3531",
                  // color: "black",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            md: "50%",
          },
          mt: "15%",
          alignItems: "center",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Typography
          sx={{
            width: {
              md: "80%",
            },
            color: "#d1e8e2",
          }}
          variant="h4"
        >
          For commissions and job offers you can fill out the form or reach out
          to me on social media!
        </Typography>
        
        <SocialMediaIcons />
      </Box>
    </div>
  );
}

export default Contact;
