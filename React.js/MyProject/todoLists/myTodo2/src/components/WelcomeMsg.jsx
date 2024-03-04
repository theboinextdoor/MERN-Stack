const WelcomeMsg = ({todoItems}) => {
  return (
    todoItems.length === 0 && <div className=" bg-opacity-50 backdrop-blur-0 bg-gray-600 w-60 rounded-2xl mx-auto my-24 h-auto p-8 text-center flex flex-col items-center md:mx-auto lg:mx-auto ">
    <img src="./src/img/smily.png" className="w-32" />
    <h1 className="text-white font-semibold text-2xl bottom-3">Nothing to do have a good day ahead</h1>
  </div>
  );
};

export default WelcomeMsg;
