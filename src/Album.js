import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import MusicBable from "./images/music_bable.png"
import MovieGallery from "./images/movie_gallery.png";
import Survey from "./images/survey.png";
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
          <Typography variant="h6" color="inherit" noWrap>
            Christopher J Neisen's Portfolio
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
              Portfolio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A list of projects I made using a varity of techologies. You can
              view my resume by clicking below.
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
                      Click here to see resume
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
                <CardMedia className={classes.cardMedia} image={MusicBable} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Music Bable
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
                  <Button size="small" color="primary">
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      color="inherit"
                      href="https://github.com/cneisen234/music_babel"
                    >
                      View
                    </Link>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={MovieGallery}
                  title="Image title"
                />
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
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/Movie-Gallery"
                  >
                    View
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
                  <Button size="small" color="primary">
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      color="inherit"
                      href="https://github.com/cneisen234/Survey-Feedback-form"
                    >
                      View
                    </Link>{" "}
                  </Button>
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
                      textDecoration: "none",
                    }}
                    color="inherit"
                    href="https://github.com/cneisen234/to-do-list-2.0"
                  >
                    View
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
