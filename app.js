const btn = document.querySelector(".btn");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const boxes = document.querySelectorAll(".box");
const forms = document.querySelectorAll(".form");

btn.addEventListener("click", (e) => {
  for (const [index, form] of forms.entries()) {
    if (form.classList.contains("active")) {
      const val = form.children[1].value;
      for ([i, box] of boxes.entries()) {
        console.log(box);
        if (val !== "" && index === i) {
          box.classList.add("pr");
          form.classList.remove("active");
          form.classList.add("visible");
          form.nextElementSibling.classList.add("active");
          form.nextElementSibling.classList.remove("visible");
        }
      }
    }
  }

  inputs.forEach((inputEl, i, arr) => {
    const inputIndex = i + 1;

    // if(inputEl.classList.contains('input-username')) {
    //    if (inputEl.value === "") {
    //     console.log('empty');
    //    } else {
    //     console.log(inputEl.value);

    //     labels.forEach((labelEl,i,arr) => {
    //         const labelindex = i+1
    //         if (inputIndex === labelindex) {
    //             console.log('true');
    //             labelEl.style.display ='none'
    //         } else {
    //             console.log('not true');
    //         }
    //     })
    //    }
    // }

    // if (inputs[0].value !== "") {
    //     forms[0].classList.add('visible')
    //     forms[1].classList.remove('visible')
    // }

    //     if (inputs[1].value !== "") {
    //         forms[1].classList.add('visible')
    //         forms[2].classList.remove('visible')
    //     }

    //     if (inputs[2].value !== "") {
    //         forms[2].classList.add('visible')
    //     }
  });
});



const usr = document.querySelector('.usr')
const containerEle = document.querySelector('.test')
const cursorPos = usr.selectionStart
const textBeforeCursor = usr.value.substring(0, cursorPos);
const textAfterCursor = usr.value.substring(cursorPos);

const pre = document.createTextNode(textBeforeCursor);
const post = document.createTextNode(textAfterCursor);
const caretEle = document.createElement('span');

caretEle.classList.add('container__cursor');
caretEle.innerHTML = '&nbsp;';


const mirroredEle = document.createElement('div');
mirroredEle.textContent = usr.value;
mirroredEle.classList.add('container__mirror');
containerEle.prepend(mirroredEle);

https://codepen.io/stanko/pen/vYVyZzO?editors=1010
https://muffinman.io/blog/custom-giraffe-caret/