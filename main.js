function toggleMenu() {
  var navItems = document.getElementById("navItems");
  navItems.style.display = navItems.style.display === "block" ? "none" : "block";
  
  var myTopnav = document.getElementById("myTopnav");
  myTopnav.classList.toggle("nav_open");
}
