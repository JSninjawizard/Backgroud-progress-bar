const btn = document.querySelector('.btn')
const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')
const forms = document.querySelectorAll('.form')

console.log(forms);
btn.addEventListener('click', (e)=> {



    inputs.forEach((inputEl,i,arr) => {
        const inputIndex = i+1
      
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

        if (inputs[0].value !== "") {
            forms[0].classList.add('visible')
            forms[1].classList.remove('visible')
        }
            
            
            if (inputs[1].value !== "") {
                forms[1].classList.add('visible')
                forms[2].classList.remove('visible')
            }

            if (inputs[2].value !== "") {
                forms[2].classList.add('visible')
            }


    })
})