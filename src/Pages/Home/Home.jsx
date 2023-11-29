import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner";
import Classes from "../Classes/Classes";
import CheckOut from "./CheckOut/CheckOut";
import Footer from "../Footer/Footer";
import Partners from "./Partners/Partners";
import Instructor from "./Instructor/Instructor";
import SomeClasses from "./SomeClasses/SomeClasses";
// import FeedBack from "./FeedBack/FeedBack";

const Home = () => {
  return (
    <div className="text-blue-500">
      <Helmet>
        <title>Tutorio | Home</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>
      <Instructor></Instructor>
      <SomeClasses></SomeClasses>
      <Partners></Partners>
      {/* <FeedBack></FeedBack> */}
      <CheckOut></CheckOut>
      <Footer></Footer>
    </div>
  );
};

export default Home;
