import Marquee from "react-fast-marquee";
import img1 from "../../../assets/img/1.png";
import img2 from "../../../assets/img/2.png";
import img3 from "../../../assets/img/3.png";
import img4 from "../../../assets/img/4.png";
import img5 from "../../../assets/img/5.png";
import img6 from "../../../assets/img/6.png";
import img7 from "../../../assets/img/7.png";
import img8 from "../../../assets/img/8.png";
import img9 from "../../../assets/img/9.png";
import img10 from "../../../assets/img/10.png";

const Partners = () => {
  return (
    <div>
             <h2 className='my-10 mt-20 text-center text-4xl bg-gradient-to-r from-pink-600 via-blue-600 to-blue-600 text-transparent bg-clip-text'>
        ---<span className=" font-bold">Collaborators</span>---
      </h2>

      <div>
        <Marquee speed={150}>
          <figure className='px-10'>
            <img src={img1} alt='logos' className='rounded-xl w-32' />
          </figure>

          <figure className='px-10'>
            <img src={img2} alt='logos' className='rounded-xl w-32' />
          </figure>

          <figure className='px-10'>
            <img src={img3} alt='logos' className='rounded-xl w-52' />
          </figure>

          <figure className='px-10'>
            <img src={img4} alt='logos' className='rounded-xl w-24' />
          </figure>

          <figure className='px-10'>
            <img src={img5} alt='logos' className='rounded-xl w-32' />
          </figure>

          <figure className='px-10'>
            <img src={img6} alt='logos' className='rounded-xl w-32' />
          </figure>
          <figure className='px-10'>
            <img src={img7} alt='logos' className='rounded-xl w-52' />
          </figure>
          <figure className='px-10'>
            <img src={img8} alt='logos' className='rounded-xl w-32' />
          </figure>
          <figure className='px-10'>
            <img src={img9} alt='logos' className='rounded-xl w-32' />
          </figure>
          <figure className='px-10'>
            <img src={img10} alt='logos' className='rounded-xl w-32' />
          </figure>
          <figure className='px-10'>
            <img src={img6} alt='logos' className='rounded-xl w-32' />
          </figure>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
