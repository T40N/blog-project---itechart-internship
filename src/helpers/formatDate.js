const formatDate = (date) => {

  const Date = date.getDate().toString().slice(-1);

  let endDate = 'th'

  switch(Date){
    case '1':{
      endDate = 'st';
      break;
    }
    case '2':{
      endDate = 'nd';
      break;
    }
    case '3':{
      endDate = 'rd';
      break;
    }

  }

  return [
    date.getDate().toString() + endDate,
    date.toLocaleString("en-US", { month: "long" }),
    date.getFullYear(),
  ].join(" ");
};

export default formatDate;
