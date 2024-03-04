

const Banner = ({banner, heading, subHeading, btn1, btn2}) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">

        {/* Banner image */}
      <div>
        <img src={banner} alt="logo" className="lg:h-[386px] " />
      </div>

      {/* banner content */}
      <div className="md:w-3/5"> 
        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
        <p className="text-[#EBEBEB] text-2xl mb-8 ">
         {subHeading}
        </p>
        <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{btn1}</button>
            <button className="btnPrimary">{btn2}</button>
        </div>
      </div>

      
    </div>
  </div>
  )
}

export default Banner