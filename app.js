const btn = document.querySelector('.btn')
const boxes = document.querySelectorAll('.box')
const forms = document.querySelectorAll('.form')
const inputs = document.querySelectorAll('input')
// console.log(inputs);

let current = 1
btn.addEventListener('click', (e) => {
    // console.log(e.target);
    boxes.forEach((el, i, arr) => {

        forms.forEach((form, formI, formArr ) => {
            inputs.forEach((input, inputI, inputArr) => {
                
                if (i+1 === current && 
                    formI +1 === current && 
                    inputI +1 === current && 
                    input.value !== "") {
                        
                        el.classList.add('pr')
                        form.classList.add('v0')
                        
                        if (form.classList.contains('v0')){
                            form.nextElementSibling.classList.remove('v0')
                        }
                        // console.log(el);
                        // console.log(i);
                    }

            })

        })
        
    })
    current++
})

const test = [
    {},
    {},
    {}
]