import card from "../assets/card.jpeg"

const Feature = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary lg:1/2 mb-3 font-bold ">Why we are better than others</h3>
          <p className="text-base text- text-tartiary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dignissimos velit quibusdam rerum harum enim.
          </p>
        </div>

        {/* featured card  */}
        <div className="w-full lg:w-3/4">
            <div>
                <div>
                    <img src={card} alt="" />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Feature;
