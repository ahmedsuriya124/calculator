let inputBox = document.getElementById('inputBox');
let btn = document.querySelectorAll('.button');

let a = false
let num1 = '';
let num2 = '';
btn.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        // console.log('clicked',typeof btn.textContent);
        if(btn.textContent !== '=' && btn.textContent !== 'AC' && btn.textContent !== 'DEL' && btn.textContent !== '^'){
            inputBox.value += btn.textContent;
        }
        if(btn.textContent === '='){
            if(a){
                num2 += inputBox.value.slice(num1.length+1, inputBox.value.length)
                let exp = num1**num2;
                inputBox.value = exp;
                num1 = '';
                num2 = '';
                a = false;
            }else{
                let ans = eval(inputBox.value);
                inputBox.value  = ans
                console.log(a)

            }
        }
        if(btn.textContent === 'AC'){
            inputBox.value = '';
        }
        if(btn.textContent === '^'){
            num1 += inputBox.value;
            inputBox.value +=  btn.textContent
            a = true;
        }
        if(btn.textContent === 'DEL'){
            inputBox.value = inputBox.value.slice(0 , inputBox.value.length-1)
        }
    })
});