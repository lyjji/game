let result = document.querySelector("#result");
let retxt = document.querySelector("#resulttxt");
let chce = document.querySelector("#chance");
let chck = document.querySelector("#check");
let num = document.querySelector("#num");

let restt = document.querySelector("#restart");

num.addEventListener("click", () => {
  num.value = "";
});

let i = 5;

let rannum = () => {
  cnum = Math.floor(Math.random() * 100 + 1);
  console.log(cnum);
};

rannum();

chck.addEventListener("click", (e) => {
  // 새로고침 막기
  e.preventDefault();

  //   남은 찬스
  i--;
  if (i == 0) {
    chck.disabled = true;
  }

  chce.textContent = i;

  // 숫자비교
  let unum = num.value;
  console.log(unum);

  let reimg =
    cnum == unum
      ? "<img src='img/bingo.jpg' />"
      : i == 0
      ? "<img src='img/fail.jpg' />"
      : unum < 1 || unum > 100
      ? "<img src='img/fail.jpg' />"
      : cnum > unum
      ? "<img src='img/up.png' />"
      : cnum < unum
      ? "<img src='img/down.jpg' />"
      : "<img src='img/fail.jpg' />";

  result.innerHTML = reimg;

  let txt =
    cnum == unum
      ? "Bingo!!"
      : i == 0
      ? `땡!!! 정답은 ${cnum}!`
      : unum < 1 || unum > 100
      ? "1 ~ 100까지의 숫자를 입력해주세요!"
      : cnum > unum
      ? "up!"
      : cnum < unum
      ? "down!"
      : "1 ~ 100까지의 숫자를 입력해주세요!";

  retxt.textContent = txt;
});

restt.addEventListener("click", () => {
  rannum();

  chck.disabled = false;

  i = 5;
  chce.textContent = i;

  result.innerHTML = "<img src='img/st.jpg' />";
  retxt.textContent = "시 ~ 작 ♪";
});
