import product from '../../../assets/img/product.jpg'
const CheckOut = () => {
    return (
        <div
        className='hero h-[60vh] bg-fixed my-20'
        style={{
          backgroundImage:
            "url(./checkout.jpg)",
        }}>
        <div className='hero-overlay bg-opacity-90 rounded-md'></div>
        <div className='hero-content text-center text-neutral-content'>
        <div className='offered'>

        <div className="md:flex justify-between items-center py-8 gap-5">
             <div className="w-3/4">
             <img src={product} className="w-[350px] h-[350px]" alt="" />
             </div>
             <div className='text-left p-4'>
                <p className='text-xl text-green-500'>February 21,2023</p>
                <p className='text-3xl text-blue-400 font-bold'>Our Most Popular Contest</p>
                <p className='text-gray-500 font-semibold'>Explore the cutting-edge world of Artificial Intelligence through our comprehensive  <br /> course, where you will delve into machine learning algorithms, neural networks, and <br /> advanced   AI applications. Gain hands-on experience in programming AI solutions and   <br />  understand the ethical considerations shaping this dynamic field.  Join us on a journey to master the skills that drive innovation in the age of Artificial Intelligence.</p>
             </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default CheckOut;