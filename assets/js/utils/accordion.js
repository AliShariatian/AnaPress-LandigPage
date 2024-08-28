const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion .item .title");
  const text = item.querySelector(".accordion .item .text");

  title.addEventListener("click", () => {
    const isActive = text.classList.contains("show");

    // Hide all sections
    accordionItems.forEach((item) => item.querySelector(".text").classList.remove("show"));

    // Toggle the clicked section
    if (!isActive) {
      text.classList.add("show");
    }
  });
});
