import Banner from "../../Components/Header/Banner";
import Classes from "../Classes/Classes";
import CheckOut from "./CheckOut/CheckOut";
// import Footer from "../Footer/Footer";
import Partners from "./Partners/Partners";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Classes></Classes> 
           <Partners></Partners>
           <CheckOut></CheckOut>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;