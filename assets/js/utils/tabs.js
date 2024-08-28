const tabs = document.querySelectorAll(".portfolio .tabs span");
const items = document.querySelectorAll(".portfolio .items .item");
let activeCategory = null; // Keep track of the currently active category

// Initially display all items
updateItemsDisplay(null);

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // If the same tab is clicked again, show all items
    if (activeCategory === tab.dataset.category) {
      activeCategory = null; // Reset active category
      tabs.forEach((t) => t.classList.remove("active")); // Remove 'active' class from all tabs
      updateItemsDisplay(null); // Show all items
    } else {
      // Set the new active category
      activeCategory = tab.dataset.category;

      // Remove 'active' class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add 'active' class to the clicked tab
      tab.classList.add("active");

      // Update the displayed items based on the clicked tab
      updateItemsDisplay(activeCategory);
    }
  });
});

function updateItemsDisplay(category) {
  items.forEach((item) => {
    if (!category || item.dataset.category === category) {
      item.style.display = "block"; // Show item
    } else {
      item.style.display = "none"; // Hide item
    }
  });
}
