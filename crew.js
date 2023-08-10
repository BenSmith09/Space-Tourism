function setupCrewTabPanel() {
  const tabList = document.querySelector(".dot-indicators");
  const tabs = tabList.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll(".crew-info");
  const images = document.querySelectorAll(".crew-image");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => panel.classList.add("hide-content"));
      images.forEach((image) => image.classList.add("hide-content"));

      if (panels[index]) {
        panels[index].classList.remove("hide-content");
        images[index].classList.remove("hide-content");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupCrewTabPanel);
