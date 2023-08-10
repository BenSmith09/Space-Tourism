const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll(".destination-info");

tabList.addEventListener("keydown", changeTabFocus);
changeTabPanel();

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}

//when a tab is selected, show that content, and hide the previously selected one
function changeTabPanel() {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      console.log(`Clicked tab index: ${index}`);
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => panel.classList.add("hide-content"));

      if (panels[index]) {
        panels[index].classList.remove("hide-content");
      }

      //below changes the image to match the content
      const imageIndex = tab.getAttribute("data-image-index");
      const images = document.querySelectorAll(".destination-image");

      images.forEach((image) => image.classList.add("hide-content"));
      if (images[imageIndex]) {
        images[imageIndex].classList.remove("hide-content");
      }
    });
  });
}
