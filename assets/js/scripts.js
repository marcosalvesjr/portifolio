function showMenu() {
  const navigation = document.getElementById("navigation");
  navigation.classList.toggle("show");
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});
