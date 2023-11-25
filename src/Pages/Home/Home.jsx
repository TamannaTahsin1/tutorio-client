import Banner from "../../Components/Header/Banner";
import Classes from "../Classes/Classes";
// import Footer from "../Footer/Footer";
import Partners from "./Partners/Partners";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Partners></Partners>
           <Classes></Classes>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;