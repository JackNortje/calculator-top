
const num_btn = document.getElementsByClassName('button');
const display = document.querySelector('input')
const clear_btn = document.getElementsByClassName('C');
const delete_btn = document.getElementById('backspace');
const operation = document.getElementsByClassName('operator')
const equalBtn = document.getElementsByClassName('equals')

let num = "";
let num2 = "";
let operator = "";
let result = "";


function operate(a, b, operator) {
    if(operator == '+'){
        return a + b;
    }
    else if(operator == '-'){
        return a - b;
    }
    else if(operator == '*'){
        return a * b;
    }
    else if(operator == '/'){
        return a / b;
    }
  };

  
  function clear()
{
    display.value = "";
    num = '';
};

const dot = document.getElementById('dot').addEventListener ('click', function() {
      display.value += '.' 
  });
  
  for( let i = 0; i < num_btn.length; i++) {
            let numberButtons = num_btn[i];
            numberButtons.addEventListener('click', () => {
                display.value += numberButtons.value;
            })
        };



        document.getElementById('add').addEventListener('click', function(e){
            num = display.value;
            operator = "+";
            display.value = '';
        });
        
        document.getElementById('subtract').addEventListener('click', function(e){
            num = display.value;
            operator = '-';
            display.value = '';
        });
        
        document.getElementById('multiply').addEventListener('click', function(e){
            num = display.value;
            operator = "*";
            display.value = ''
        });
        
        document.getElementById('divide').addEventListener('click', function(e){
            num = display.value;
            operator = "/";
            display.value = '';
        });

        document.getElementById('equals').addEventListener('click', (e) => {
            num2 = display.value;
            result = operate(+num, +num2, operator);
            if(result % 1 != 0)
            {
                display.value = result.toFixed(5);
            }
            else
            {
                display.value = result;
            }
            if(operator == "/")
            {
                num = result * result;
            }
            else if(operator == "*")
            {
                num = 1;
            }
            else if(operator == '-')
            {
                num = result + result;
            }
            else
            {
                num = 0;
            }
                });
        
     
        clear_btn[0].addEventListener('click', clear);
        
        delete_btn.addEventListener('click', function(){
            display.value = display.value.slice(0, -1)
        });
