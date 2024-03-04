const MyDay = () => {
    const Days = [
        "Sunday",
        "Monday",
        "TuesDay",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
  const date = new Date();
  const thisday = Days[date.getDay()];
  const thisMonth = months[date.getMonth()];
  const thisDate = date.getDate();
  const thisYear = date.getFullYear()
//   console.log(thisYear);
//   console.log("today is : "+thisDate);

  return (
    <div className="p-4 font-myFont md:p-4 md:mx-4 lg:mx-6">
      <h1 className="text-red-500 text-4xl font-bold md:text-5xl lg:text-6xl">{thisday}</h1>
      <p className="text-lg md:text:xl lg:text:2xl text-white">{thisMonth} {thisDate}, {thisYear}</p>
    </div>
  );
};
export default MyDay;
