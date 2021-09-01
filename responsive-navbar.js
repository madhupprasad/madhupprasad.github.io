const scrollWin = {
  pageCount: 0,
  pageHeight: window.innerHeight,
  containerElem: document.querySelector("#container"),
  downElem: document.querySelector("#scrollButtonDown"),
  upElem: document.querySelector("#scrollButtonUp"),
  sign: document.querySelector("#sign"),

  scrollDown: function util() {
    this.containerElem.scrollBy(0, this.pageHeight);
  },
  scrollUp: function util() {
    this.containerElem.scrollBy(0, -this.pageHeight);
  },
};

$("#fist").click(function () {
  this.style.display = "none";
  $("#sign").css("display", "block");
});

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 7}deg)">${char}</span>`
  )
  .join("");

var i = 0;
var txt = `I did internships as a frontend developer in apipatform.io and Fanclash.
In that time I learnt a lot about coding standards used in industries. I
worked with Angular, React Native as the main development environment. I
also dealt with many of the framework’s intricacies. I developed landing
pages of the company's website, developed react-native components, fixed
bugs, optimized performance of the app by detecting memory leaks,
refactoring, and wrote a script to eliminate unused assets. My academic
experiences have served me well in developing my collaboration,
communication, and critical thinking skills. I work well to use clear and
concise communication to interact professionally with co-workers,
supervisors and customers.`;
var speed = 30;

function typeWriter() {
  document.getElementById("typeButt").style.display = "none";
  if (i < txt.length) {
    document.getElementById("three").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
