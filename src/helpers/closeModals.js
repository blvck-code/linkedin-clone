const clickOutside = (e = e, id) => {
  if (e.target === document.querySelector(".modal")) {
    document.querySelector(".modal").style.display = "none";
  } else if (e.target === document.querySelector(id)) {
    document.getElementById(id).style.display = "none";
  }
};
export default clickOutside;
