// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const myCartLink = document.querySelector("nav a[href='#My Cart']");
    
    if (myCartLink) {
      myCartLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("My Cart is empty.");
      });
    }
  });
  