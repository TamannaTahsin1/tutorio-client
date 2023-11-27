/** @format */

import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner";
import Classes from "../Classes/Classes";
import CheckOut from "./CheckOut/CheckOut";
// import Footer from "../Footer/Footer";
import Partners from "./Partners/Partners";
import Instructor from "./Instructor/Instructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorio | Home</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>
      <Instructor></Instructor>
      <Partners></Partners>
      <CheckOut></CheckOut>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
