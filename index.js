addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.number');
  const calcButtons = document.querySelectorAll('.operation');
  const equalTo = document.getElementById('equalTo');
  const resultText = document.getElementById('result');
  const deleteButton = document.getElementById('delete');

  let isFirst = true;
  let isDone = false;

  let operationString = "";

  let numberText;

  let firstValue = 0;
  let secondValue = 0;
  let resultValue = 0;

    resultText.innerText = '0';
    

    for(let i = 0; i < buttons.length; i++)
    {
      buttons[i].addEventListener('click', () => {
          numberText = buttons[i].innerText;
          resultText.style = "color:black";
          // if(result.style == "color:red")
          // {
          //   result.innerText = numberText;
          // }
          if(resultText.innerText.length < 37)
          {
            if(resultText.innerText === "0" || isDone)
            {
              resultText.innerText = numberText;
              isDone = false;
            } else
            resultText.innerText += numberText;
          }
          if(isFirst)
          {
            if(resultText.innerText != "")
            {
              firstValue = parseInt(resultText.innerText);
            }
          }
          
          
      })
    }
    
    resultValue = parseInt(resultText.innerText);

    for(let i = 0; i < calcButtons.length; i++) //OPERATION FUNCTIONS
    {
      calcButtons[i].addEventListener('click', () => {
        operationString = calcButtons[i].innerText;
        isFirst = false;
        isDone = true;
        firstValue = parseInt(resultText.innerText);
        resultText.style = "color:blue";
      })
    }

    deleteButton.addEventListener('click', () => { //DELETE BUTTON
      numberText = "0";
      resultText.innerText = numberText;
    })

    

    equalTo.addEventListener('click', () => { //EQUAL-TO LOGIC
      resultText.innerText = resultValue.toString();
      resultText.style = "color:red";
      isDone = true;
      isFirst = true;
      if(!isFirst)
      {
        secondValue = parseInt(resultText.innerText);
        calc(operationString, firstValue, secondValue);
      }

      console.log(resultValue);
    })


    function calc(strOp, first, second)
    {

      switch (strOp) {
        case "+":
          resultValue = first + second;
          break;
      
        case "-":
          resultValue = first - second;
          break;

        case "x":
          resultValue = first * second;
          break;

        case "/":
          resultValue = first / second;
          break;
          
        default:
          resultValue = first;
          break;
      }
    }

})


  /* 8732485373 => int => firstValue 
  al obtener firstValue y SecondValue con el mismo procedimiento en cada uno
  se obtiene el tipo de operacion matematica elegida y se aplica en ambos valores
  */