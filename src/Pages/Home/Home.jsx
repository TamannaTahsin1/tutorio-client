import Banner from "../../Components/Header/Banner";
import Classes from "../Classes/Classes";
import Description from "./Description/Description";
// import Footer from "../Footer/Footer";
import Partners from "./Partners/Partners";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Classes></Classes>
           <Description></Description>
           <Partners></Partners>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;