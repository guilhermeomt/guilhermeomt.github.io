const elements = document.querySelectorAll(".bg-text");
const skillMenus = document.querySelectorAll(".skill-menu-content");
const skillsLinks = document.querySelectorAll(".bg-skill-link");
let currentSkillMenuId = 0;

function openMenu(x, y, id) {
  skillMenus[id].style.position = "absolute";
  skillMenus[id].style.left = `${x + 30}px`;
  skillMenus[id].style.top = `${y + 150}px`;
  skillMenus[id].classList.add("open");
  currentSkillMenuId = id;
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

window.addEventListener("scroll", (e) => {
  elements.forEach(el => {
    if (window.pageYOffset >= 250 && window.pageYOffset <= 700) {
      el.classList.add("bg-highlight");
    } else {
      el.classList.remove("bg-highlight");
    }
  });
});

skillsLinks.forEach(skillLink => {
  skillLink.addEventListener("mouseover", (e) => {
    const elementOffset = offset(e.target);

    switch (Number(skillLink.dataset.skill)) {
      case 1:
        openMenu(elementOffset.left, elementOffset.top - 200, 0);
        break;
      case 2:
        openMenu(elementOffset.left, elementOffset.top - 200, 1);
        break;
      case 3:
        openMenu(elementOffset.left, elementOffset.top - 200, 2);
        break;
      case 4:
        openMenu(elementOffset.left, elementOffset.top - 200, 3);
        break;
      case 5:
        openMenu(elementOffset.left, elementOffset.top - 200, 4);
        break
    }
  });

  skillLink.addEventListener("mouseout", (e) => {
    skillMenus[currentSkillMenuId].classList.remove("open");
  })
})