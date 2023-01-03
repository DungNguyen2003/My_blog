var heartBtns = document.querySelectorAll(".interactive-icon-heart");
var likeBtns = document.querySelectorAll(".interactive-icon-like");
var heartNums = document.querySelectorAll(".blog__interactive-number");

//chua fix xong
function incrementNums() {
  var heartBtns = document.querySelectorAll(".interactive-icon-heart");
  var values = 0;
  for (let i = 0; i < heartBtns.length; i++) {
    heartBtns[i].onclick = function (e) {
      e.currentTarget.classList.toggle("red");
      e.currentTarget.classList.toggle("inline-block");
      for (let i = 0; i < heartBtns.length; i++) {
        var isLike = heartBtns[i].classList.contains("red");

        if (isLike) {
          //   console.log(btn.parentElement.querySelector(".number-heart").innerText);
          values = getNumberLikes(heartBtns[i]);
          values++;

          heartBtns[i].parentElement.querySelector(".number-heart").innerText =
            values;
        }

        //   console.log(values);
      }
    };
  }
}

function getNumberLikes(btn) {
  return btn.parentElement.querySelector(".number-heart").innerText;
}

// }
incrementNums();
