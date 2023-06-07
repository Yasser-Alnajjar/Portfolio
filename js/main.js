let skillsArray = [
  {
    id: 1,
    name: "C++",
    icon: "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png",
  },
  {
    id: 2,
    name: "html",
    icon: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
  },
  {
    id: 3,
    name: "css",
    icon: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
  },
  {
    id: 4,
    name: "bootstrap",
    icon: "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
  },
  {
    id: 5,
    name: "js",
    icon: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
  },
  {
    id: 6,
    name: "ts",
    icon: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
  },
  {
    id: 7,
    name: "angular (learinig)",
    icon: "https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png",
  },
  {
    id: 8,
    name: "react",
    icon: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
  },
  { id: 9, name: "gulp", icon: "../images/gulp.svg" },
  {
    id: 10,
    name: "webpack",
    icon: "https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png",
  },
  {
    id: 11,
    name: "redux",
    icon: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
  },
  {
    id: 12,
    name: "php",
    icon: "https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png",
  },
  {
    id: 13,
    name: "atom",
    icon: "https://user-images.githubusercontent.com/25181517/190887571-ddd87d6e-77f8-41e7-b755-9b6d68e4fab7.png",
  },
  { id: 14, name: "git", icon: "../images/git.png" },
  { id: 15, name: "github", icon: "../images/github.svg" },
  {
    id: 16,
    name: "mysql",
    icon: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png",
  },
  { id: 17, name: "pug", icon: "../images/pug.png" },
  {
    id: 18,
    name: "sass",
    icon: "https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png",
  },
  {
    id: 19,
    name: "visual studio",
    icon: "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png",
  },

  {
    id: 20,
    name: "NPM",
    icon: "https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png",
  },
];
let body = document.body,
  btnLight = document.getElementById("light"),
  btnDark = document.getElementById("dark"),
  details = document.querySelector("#details"),
  contactMe = document.querySelector("#contactMe"),
  liDetails = document.querySelector("#liDetails"),
  learn = document.querySelector("#learn"),
  liHome = document.querySelector("#liHome"),
  home = document.querySelector("#home"),
  liSkills = document.querySelector("#liSkills"),
  skills = document.querySelector("#skills"),
  skill = document.querySelector(".skill .container .row"),
  liWorks = document.querySelector("#liWorks"),
  works = document.querySelector("#works"),
  liContact = document.querySelector("#liContact"),
  contact = document.querySelector("#contact"),
  loading = document.querySelector("#load"),
  contactDetils = document.querySelector("#contact-detils");
const theme = localStorage.getItem("theme");
null !== theme &&
  (body.classList.remove("light"),
  body.classList.add(localStorage.getItem("theme")));
let lis = document.querySelectorAll(".theme li");
function check() {
  (body.classList.contains("dark")
    ? (btnDark.classList.add("hide"), btnLight)
    : (btnLight.classList.add("hide"), btnDark)
  ).classList.remove("hide");
}
lis.forEach((e) => {
  e.addEventListener("click", (e) => {
    lis.forEach((e) => {
      e.classList.remove("hide");
    }),
      e.currentTarget.classList.add("hide"),
      localStorage.setItem("theme", e.currentTarget.dataset.theme),
      "light" == localStorage.theme
        ? (document.body.classList.add(e.currentTarget.dataset.theme),
          document.body.classList.remove("dark"))
        : "dark" == localStorage.theme &&
          (document.body.classList.add(e.currentTarget.dataset.theme),
          document.body.classList.remove("light"));
  });
}),
  check();
let slide = document.querySelector("#slide"),
  slideContainer = document.querySelector("#slide-container"),
  slideBar = localStorage.getItem("slideBar");
function onscroll_do_style(e, o = String) {
  window.addEventListener("load", function () {
    e.style.display = o;
  });
}
function scroll_To_Me(e, o, t = 0) {
  o.onclick = () => {
    window.scrollTo("Y", e.offsetTop - t);
  };
}
null !== slideBar &&
  slideContainer.classList.add(localStorage.getItem("slideBar")),
  (slide.onclick = () => {
    slideContainer.classList.toggle("show"),
      slideContainer.classList.contains("show")
        ? localStorage.setItem("slideBar", "show")
        : localStorage.removeItem("slideBar", "show");
  }),
  onscroll_do_style(loading, "none"),
  scroll_To_Me(details, liDetails, 60),
  scroll_To_Me(details, learn, 60),
  scroll_To_Me(contact, contactMe, 20),
  scroll_To_Me(skills, liSkills, 20),
  scroll_To_Me(works, liWorks, 20),
  scroll_To_Me(works, liWorks, 20),
  scroll_To_Me(contact, liContact, 20);
let scrollUp = document.querySelector("#scrollUp");
function clickMe_toScroll(e, o) {
  e.onclick = () => {
    window.scrollTo("Y", o);
  };
}
clickMe_toScroll(liHome, 0), clickMe_toScroll(scrollUp, 0);
let box = document.querySelector(".box"),
  html = document.querySelector(".html"),
  css = document.querySelector(".css"),
  bootstrap = document.querySelector(".bootstrap"),
  js = document.querySelector(".js"),
  jquery = document.querySelector(".jquery"),
  sass = document.querySelector(".sass"),
  github = document.querySelector(".github"),
  pug = document.querySelector(".pug"),
  gulp = document.querySelector(".gulp");
function moveDivRight(e, o) {
  document.documentElement.scrollTop > box.offsetTop + 1e3
    ? (e.style.left = "0px")
    : (e.style.left = o);
}
function moveDivLeft(e, o) {
  document.documentElement.scrollTop > box.offsetTop + 1e3
    ? (e.style.right = "0px")
    : (e.style.right = o);
}
function moveDivTop(e, o) {
  document.documentElement.scrollTop > box.offsetTop + 1e3
    ? (e.style.bottom = "0px")
    : (e.style.bottom = o);
}
function checkIfDivIsShow() {
  document.documentElement.scrollTop > box.offsetTop + 1e3 &&
    ((html.style.left = "0px"),
    (css.style.bottom = "0px"),
    (bootstrap.style.bottom = "0px"),
    (js.style.right = "0px"),
    (jquery.style.left = "0px"),
    (sass.style.bottom = "0px"),
    (github.style.bottom = "0px"),
    (pug.style.right = "0px"),
    (gulp.style.bottom = "0px"));
}
function arrowShow() {
  document.documentElement.scrollTop < 400
    ? (scrollUp.style.opacity = 0)
    : document.documentElement.scrollTop > home.offsetTop &&
      (scrollUp.style.opacity = 1);
}
window.onscroll = function () {
  moveDivRight(html, "-500px"),
    moveDivTop(css, "500px"),
    moveDivTop(bootstrap, "500px"),
    moveDivLeft(js, "-500px"),
    moveDivRight(jquery, "-500px"),
    moveDivTop(sass, "-500px"),
    moveDivTop(github, "-500px"),
    moveDivLeft(pug, "-500px"),
    moveDivTop(gulp, "-500px"),
    document.documentElement.scrollTop < 400
      ? (scrollUp.style.opacity = 0)
      : document.documentElement.scrollTop > home.offsetTop &&
        (scrollUp.style.opacity = 1);
};
// checkIfDivIsShow();
// arrowShow();
function skillsRender(array) {
  array.forEach((element) => {
    skill.innerHTML += `
    <div class="col-sm-6 md-4 col-lg-3">
    <div class="box ${element.name}">
    <img  class=" rounded-2" src="${element.icon}"alt="${element.name}"/>
    <h5 class="text">${element.name}</h5>
    </div>
    </div>
    `;
    console.log(element);
  });
}
skillsRender(skillsArray);
