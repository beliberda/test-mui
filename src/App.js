import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import Empty from "./components/Empty";
import Paginate from "./components/Pagination";
import Video from "./components/Video";
import CardDescript from "./components/CardDescript";
import Review from "./components/Review";
import placeholder from "./assets/placeholder60.png";
import CardAbout from "./components/CardAbout";
import CardInfo from "./components/CardInfo";
import Grid from "@mui/material/Unstable_Grid2";
import pdf from "./assets/pdf_5588.png";
import contact from "./assets/circle.png";
import video from "./assets/video.png";
import light from "./assets/lightning.png";
import lamp from "./assets/lamp.png";
import droplet from "./assets/droplet.png";
import gear from "./assets/gear.png";
import twoGears from "./assets/two-gears-svgrepo-com.svg";
import Grid2 from "@mui/material/Unstable_Grid2";
import SearchInput from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardNews from "./components/News";
import CardForm from "./components/CardForm";

const yellow = "#ffe400";
const black = "#282828";
const white = "#ffffff";
const pearl = "#fcf3d2";
const blue = "#2197d7";


function App() {
  return (

      <Container maxWidth="1920px" sx={{ padding: 0 }}>
        <Grid2 container sx={{ flexGrow: 1 }} columns="12">
          <Header />
          <Grid xs={9}>
            <Empty />
          </Grid>
          <Grid xs={3}>
            <Empty bgColor={black} />
          </Grid>
          <Grid xs={6}>
            <CardAbout
              title="BUILDING THE WORLD AROUND US"
              text="Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team."
              buttonText="Read more"
              bgColor={yellow}
            />
          </Grid>
          <Grid xs={3}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <Paginate/>
          </Grid>
          <Grid xs={6}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <Video title="Company video" image={video} />
          </Grid>
          <Grid xs={3}>
            <Empty bgColor={black}/>
          </Grid>
          <Grid xs={3}>
            <CardDescript
              title="OUR SERVICES"
              text="Our mission is to provide the highest level of service for our client-partners from concept through construction."
            />
          </Grid>
          <Grid xs={3}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <CardDescript
              title="General
              Contracting
              "
              text="This allows the Design and Engineering team to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve."
            />
          </Grid>
          <Grid xs={3}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <Paginate/>
          </Grid>
          <Grid xs={3}>
            <CardDescript
              title="Project design and engineering"
              text="Through Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize clearly defined project objective to achieve intended results."
            />
          </Grid>
          <Grid xs={3}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <CardDescript
              title="Capital
              improvements
              "
              text="This results in scope creep and slippage of the schedule that ultimately result in additional costs to the owner."
            />
          </Grid>
          <Grid xs={3}>
            <Video image={pdf} title="DOWNLOAD PRICE" color={yellow}></Video>
          </Grid>
          <Grid xs={3}>
            <Video image={contact} title="CONTACT US" />
          </Grid>
          <Grid xs={6}>
            <SearchInput bgColor={black} />
          </Grid>
          <Grid xs={6}>
            <Review
              path={placeholder}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet"
            ></Review>
          </Grid>
          <Grid xs={6}>
            <CardAbout
              title="YOUR BUILDING IS IN GOOD HANDS"
              text="Our mission is to provide the highest level of service for our client-partners from concept throught construnction"
              buttonText="ABOUT COMPANY"
            />
          </Grid>
          <Grid xs={6}>
            <Review
              path={placeholder}
              bgColor={pearl}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet laboriosam dolorum in rem nisi quam?"
            ></Review>
          </Grid>
          <Grid xs={3}>
            <CardInfo
              bgColor={white}
              image={light}
              title="55 000"
              text="Expert Witness"
            />
          </Grid>
          <Grid xs={3}>
            <CardInfo image={droplet} title="55 000" text="Construnction" />
          </Grid>
          <Grid xs={3}>
          <CardNews bgColor={blue} title='Project Design and Engineering Services'
          comments='23' data='12 febuary, 2015'
          />
          </Grid>
          <Grid xs={3}>
            <Review
              path={placeholder}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet"
            ></Review>
          </Grid>
          <Grid xs={3}>
            <CardInfo image={gear} title="55 000" text="Procurement" />
          </Grid>
          <Grid xs={3}>
            <CardInfo
              bgColor={white}
              image={lamp}
              title="55 000"
              text="Project Managments"
            />
          </Grid>
          <Grid xs={3}>
            <CardAbout
              bgColor={white}
              color="primary"
              title="Contemporary Villa"
              text="Diversity is a buzzword often heard by brand managers, business tycoons, politicians, and more; but it's much more than that. To us at DM Construction, diversity is the name of the game."
              button="none"
            />
          </Grid>

          <Grid xs={6}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <Video image={twoGears} color={yellow} title='WORK WITH US'></Video>
          </Grid>
          <Grid xs={3}>
            <CardAbout
              bgColor={white}
              color="primary"
              buttonText="VIEW PROJECT"
              text="We offer a diverse set of skills to all clients in all fields, but also offer a diverse group of individuals who are able to deliver those skills. From"
              line="none"
            />
          </Grid>
          <Grid xs={3}>
            <Empty/>
          </Grid>
          <Grid xs={3}>
            <Paginate/>
          </Grid>
          <Grid xs={3}>
            <CardForm bgColor={blue} />
          </Grid>
          <Footer />
        </Grid2>
      </Container>

  );
}

export default App;
