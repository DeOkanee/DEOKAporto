function checkScroll() {
  var items = document.querySelectorAll(".fh5co-social");

  items.forEach(function (item) {
    var position = item.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
