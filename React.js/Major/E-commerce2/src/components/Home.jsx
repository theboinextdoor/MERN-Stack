import logo2 from "../assets/logo2.png"
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
       <Banner banner={logo2} heading={"Develop your own skills without dilligence"} subHeading={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem, alias aperiam accusamus ea deserunt soluta odio delectus molestias recusandae. Eligendi voluptas animi dolores quidem similique odio voluptates, corrupti labore."} btn1={"Get Started"}  btn2={"Discount"} />
    </div>
  );
};

export default Home;
