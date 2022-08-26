const formatDate = (date) => {
  return [
    date.getDate().toString().padStart(2, "0") + "th",
    date.toLocaleString("en-US", { month: "long" }),
    date.getFullYear(),
  ].join(" ");
};

export default formatDate;
