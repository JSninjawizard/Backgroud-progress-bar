const btn = document.querySelector('.btn')
const boxes = document.querySelectorAll('.box')


let current = 1
btn.addEventListener('click', (e) => {
    console.log(e.target);
    boxes.forEach((el, i, arr) => {
        if (i < arr.length) {
            if (i+1 === current) {
                el.classList.add('pr')
                console.log(el);
                console.log(i);
            }
        }
    })
    current++
})