import { Grid, createTheme, ThemeProvider, Box } from "@mui/material";
import { Container } from "@mui/system";
import Empty from "./components/Empty";
import logo from "./assets/logo.png";
import Paginate from "./components/Pagination";
import Video from "./components/Video";
import CardDescript from "./components/CardDescript";
import Review from "./components/Review";
import placeholder from "./assets/placeholder60.png";
import CardAbout from "./components/CardAbout";
import CardInfo from "./components/CardInfo";
import LogoBlock from "./components/Logo";

import pdf from "./assets/pdf_5588.png";
import contact from "./assets/circle.png";
import video from "./assets/video.png";
import light from "./assets/lightning.png";
import lamp from "./assets/lamp.png";
import droplet from "./assets/droplet.png";
import gear from "./assets/gear.png";
import twoGears from "./assets/two-gears-svgrepo-com.svg";

import SearchInput from "./components/Search";

const yellow = "#ffe400";
const black = "#282828";
const white = "#ffffff";
const pearl = "#fcf3d2";
const blue = "#2197d7";
const grey = "#d7d7d7";

function App() {
  return (
    <Container maxWidth="1920">
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid  xs={6} xsOffset={6} md={9} mdOffset={10}>
          <LogoBlock image={logo} />
        </Grid>
        <Grid xs={3}>
          <Empty bgColor={black}></Empty>
        </Grid>
        <Grid  xs={6}>
          <CardAbout
            title="BUILDING THE WORLD AROUND US"
            text="Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team."
            buttonText="Read more"
            bgColor={yellow}
          ></CardAbout>
        </Grid>
        <Grid  xs={3}>
          <Empty></Empty>
        </Grid>
        <Grid  xs={3}>
          <Paginate></Paginate>
        </Grid>
        <Grid  xs={6}>
          <Empty></Empty>
        </Grid>
        <Grid  xs={3} xsOffset={3} mdOffset={6} >
          <Video title="Company video" image={video} />
        </Grid>
        <Grid  xs={3}>
          <Empty bgColor={black}></Empty>
        </Grid>
        <Grid  xs={3}>
          <CardDescript
            title="OUR SERVICES"
            text="Our mission is to provide the highest level of service for our client-partners from concept through construction."
          ></CardDescript>
        </Grid>
        <Grid  xs={3}>
          <Empty></Empty>
        </Grid>
        <Grid  xs={3}>
          <CardDescript
            title="General
              Contracting
              "
            text="This allows the Design and Engineering team to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve."
          ></CardDescript>
        </Grid>
        <Grid  xs={3}>
          <Empty></Empty>
        </Grid>
        <Grid  xs={3}>
          <Paginate></Paginate>
        </Grid>
        <Grid  xs={3}>
          <CardDescript
            title="Project design and engineering"
            text="Through Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize clearly defined project objective to achieve intended results."
          ></CardDescript>
        </Grid>
        <Grid  xs={3}>
          <Empty></Empty>
        </Grid>
        <Grid  xs={3}>
          <CardDescript
            title="Capital
              improvements
              "
            text="This results in scope creep and slippage of the schedule that ultimately result in additional costs to the owner."
          ></CardDescript>
        </Grid>
        <Grid  xs={3}>
          <Video image={pdf} title="DOWNLOAD PRICE" color={yellow}></Video>
        </Grid>
        <Grid  xs={3}>
          <Video image={contact} title="CONTACT US" />
        </Grid>
        <Grid  xs={6}>
          <SearchInput bgColor={black}/>
        </Grid>
        <Grid  xs={6}>
          <Review
            path={placeholder}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet"
          ></Review>
        </Grid>
        <Grid  xs={6}>
          <CardAbout
            title="YOUR BUILDING IS IN GOOD HANDS"
            text="Our mission is to provide the highest level of service for our client-partners from concept throught construnction"
            buttonText="ABOUT COMPANY"
          ></CardAbout>
        </Grid>
        <Grid  xs={6}>
          <Review
            path={placeholder}
            bgColor={pearl}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet laboriosam dolorum in rem nisi quam?"
          ></Review>
        </Grid>
        <Grid  xs={3}>
          <CardInfo
            bgColor={white}
            image={light}
            title="55 000"
            text="Expert Witness"
          />
        </Grid>
        <Grid  xs={3}>
          <CardInfo image={droplet} title="55 000" text="Construnction" />
        </Grid>
        <Grid  xs={3}>
          <Empty bgColor={blue}></Empty>
        </Grid>
        <Grid  xs={3}>
          <Review
            path={placeholder}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, vero temporibus assumenda possimus aut, dignissimos animi amet"
          ></Review>
        </Grid>
        <Grid  xs={3}>
          <CardInfo image={gear} title="55 000" text="Procurement" />
        </Grid>
        <Grid  xs={3}>
          <CardInfo
            bgColor={white}
            image={lamp}
            title="55 000"
            text="Project Managments"
          />
        </Grid>
        <Grid xs={3}>
          <CardAbout bgColor={white} color='primary' buttonText='VIEW PROJECT' title='Contemporary Villa' text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem ffferfewfewfwe'>
          </CardAbout>
        </Grid>
        <Grid container xs={9} column={3}>
          <Grid xs={8}><Empty></Empty></Grid>
          <Grid xs={4}><Video image={twoGears} color={yellow}></Video></Grid>
          <Grid xs={4}><Empty></Empty></Grid>
          <Grid xs={4}><Paginate></Paginate></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
