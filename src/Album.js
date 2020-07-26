import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MusicBabel from "./images/music_bable.png"
import MovieGallery from "./images/movie_gallery.png";
import Survey from "./images/survey.png";
import ProfilePic from "./images/professional.jpg";
import ToDoList from "./images/To_Do_List.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
  Christopher Neisen {""}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography
            style={{
              width: "60%",
            }}
            variant="h6"
            color="inherit"
            noWrap
          >
            Christopher J Neisen's Portfolio
          </Typography>
          <Typography
            style={{
              width: "30%",
            }}
          >
            <PhoneIcon /> {" "} 701-429-4837 <br />
            <EmailIcon />{" "} christopherjay71186@gmail.com
          </Typography>
          <Typography
            style={{
              width: "5%",
            }}
          >
            {" "}
            <Link
              style={{
                textDecoration: "none",
              }}
              color="inherit"
              href="https://github.com/cneisen234"
            >
              <GitHubIcon />
            </Link>{" "}
          </Typography>
          <Typography
            style={{
              width: "5%",
            }}
          >
            {" "}
            <Link
              style={{
                textDecoration: "none",
              }}
              color="inherit"
              href="https://www.linkedin.com/in/chris-neisen-95678619b/"
            >
              <LinkedInIcon />
            </Link>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Christopher Neisen
            </Typography>
            <img
              style={{
                width: "30%",
                float: "left",
                borderRadius: "100%",
                margin: 10,
              }}
              className="profilepic"
              src={ProfilePic}
              alt="me"
            ></img>
            <Typography
              style={{
                textAlign: "justify",
              }}
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Professional software engineer! I am currently living out the
              fulfillment of a lifelong dream and couldn't be happier. I've
              always had an interest in what goes on behind the scenes of
              software systems. I’ve invested a lot of time diving deep and I'm
              always determined to learning and growing more. <br /> <br /> In
              my free time I like to play volleyball and tennis. I love to swim
              at the lakes and I also enjoy hiking. One of my favorite ways to
              spend a summer evening is around a bonfire with friends. I also
              love listening to music. <br /> <br /> I have a drive and passion
              to do a job and do it well and to become my best self. I'm always
              seeking to learn and grow and improve myself in every way. I have
              a gift where I easily inspire others to do their best as well and
              know how to keep people motivated to the goals they have and can
              easily lead people in the right direction if they get off track. I
              have leadership experience both professionally as well as
              personally, I'm also a very likable person, and that allows me to
              bring a lot to the table.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      color="inherit"
                      href="https://docs.google.com/document/d/11ieH6lMNW8W67YM0Ms8W2nSe2reLxzHDn-5UTIXaBLc/edit?usp=sharing"
                    >
                      View resume
                    </Link>{" "}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={MusicBabel} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Music Babel
                  </Typography>
                  <Typography>
                    A music community app. Users can recommend songs, rate and
                    comment on recommended songs, and also generate a random
                    song. This app utlizes Spotify APIs and allows the user to
                    link to their spotify account. Registeration and login is
                    required to interact with the app in any way. Users can view
                    recommendations and comments without being logged in, but
                    these features are read only and no further features of the
                    app are accessable or visable to non-members. A more indepth
                    explanation of all of the features can be found below.
                    Screenshots are included for visaul aid.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{
                      width: "100%",
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/music_babel"
                  >
                    <Button
                      style={{
                        backgroundColor: "lightblue",
                      }}
                      size="large"
                      color="primary"
                    >
                      View GitHub
                      <GitHubIcon />
                    </Button>
                  </Link>{" "}
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={MovieGallery} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Movie Gallery
                  </Typography>
                  <Typography>
                    A gallery of movies stored in a database. The header will
                    scroll through a random generated movie poster from the
                    database and scroll it in from the right, it will hang in
                    the middle for a few seconds, and then exit via the left. It
                    will then be replaced with another random generated poster
                    and repeat the process. Below that a list of all of the
                    movies will be listed. If you hover over a picture you will
                    see a notice that says to click here for more info on that
                    movie. If you click on that spot you will be brought to the
                    details page where you can see more details about the movie,
                    click the edit button to edit this information.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{
                      width: "100%",
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/Movie-Gallery"
                  >
                    <Button
                      style={{
                        backgroundColor: "lightblue",
                      }}
                      size="large"
                      color="primary"
                    >
                      View GitHub
                      <GitHubIcon />
                    </Button>
                  </Link>{" "}
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Survey}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Survey Feedback Form
                  </Typography>
                  <Typography>
                    A feedback form where users can give their feedback and it
                    gets logged into a database for later review. It includes a
                    place for the users name, how they are feeling, their
                    understanding, and how well they feel supported. The last
                    page is for comments and also has a final "submit" button
                    appear when comments are selected. All form information is
                    required except for comments. The feedback form also
                    includes an admininstrative page at the path of /admin that
                    allows admins to view all submitted feedback, see the date
                    it was submitted, and delete any that were submitted. You
                    can also flag any for review and the review value gets
                    changed from false to true and sent back to the database.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{
                      width: "100%",
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/Survey-Feedback-form"
                  >
                    <Button
                      style={{
                        backgroundColor: "lightblue",
                      }}
                      size="large"
                      color="primary"
                    >
                      View GitHub
                      <GitHubIcon />
                    </Button>
                  </Link>{" "}
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={ToDoList}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    To Do List 2.0
                  </Typography>
                  <Typography>
                    A simple to do list used to keep track of daily or weekly
                    tasks. Comes complete with a built in clock, a due date
                    generated based on priority level, and a count down timer
                    that counts down to the due date. 4 columns exist where each
                    task gets sorted based on the following conditions: "added
                    but not started", "started but not completed", "completed" ,
                    and "past due". These are auto sorted for you based on the
                    status of each task. This app is also mobile friendly and
                    can be used on any mobile device.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{
                      width: "100%",
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/to-do-list-2.0"
                  >
                    <Button
                      style={{
                        backgroundColor: "lightblue",
                      }}
                      size="large"
                      color="primary"
                    >
                      View GitHub
                      <GitHubIcon />
                    </Button>
                  </Link>{" "}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
