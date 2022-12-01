import {Box} from "@mui/material";
import {Header} from "./components/header/Header";
import TableUser from "./components/table_user/TableUser";
import {Carousel} from "./components/carousel/Carousel";
import {Footer} from "./components/footer/Footer";

function Home() {
  return (
    <Box>
      <Header/>
      <TableUser/>
      <Carousel/>
      <Footer/>
    </Box>
  );
}

export default Home;
