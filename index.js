addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.number');
  const calcButtons = document.querySelectorAll('.operation');
  const equalTo = document.getElementById('equalTo');
  const resultText = document.getElementById('result');
  const deleteButton = document.getElementById('delete');

  let isFirst = true;

  let strFirstValue;
  let strSecondValue;
  let strCalc;

  let firstValue;
  let secondValue;
  let result;
  
  resultText.innerText = '0';
      
  inputValues(strFirstValue);

  strCalc = inputOperations();

  inputValues(strSecondValue);

  switch (strCalc) 
  {
    case "+":
      result = parseInt(strFirstValue) + parseInt(strSecondValue);
      break;
  
    case "-":
      result = parseInt(strFirstValue) - parseInt(strSecondValue);
      break;

    case "x":
      result = parseInt(strFirstValue) * parseInt(strSecondValue);
      break;

    case "/":
      result = parseInt(strFirstValue) / parseInt(strSecondValue);
      break;

    default:
      result = parseInt(strFirstValue);
      break;
  }

  equalTo.addEventListener('click', () => {
      resultText = result.toString();
      numberText = "";
  })

  deleteButton.addEventListener('click', () => {
      numberText = "0";
      resultText.innerText = numberText;
  })



  function inputValues(x)
  {
    for(let i = 0; i < buttons.length; i++)
    {
      buttons[i].addEventListener('click', () => 
      {
          x = buttons[i].innerText;
          if(resultText.innerText.length < 37)
          {
            if(resultText.innerText === "0")
            {
              resultText.innerText = x;
            }else
            resultText.innerText += x;
          }

      })
    }
  }
  
  function inputOperations() 
  {
    let operation;

    for(let i = 0; i < calcButtons.length; i++)
    {
      calcButtons[i].addEventListener('click', () =>
      {
        isFirst = false;
        inputValues(strSecondValue);

        operation = calcButtons[i].innerText;

        return operation;
      })
    }  
  }

})


  /* 8732485373 => int => firstValue 
  al obtener firstValue y SecondValue con el mismo procedimiento en cada uno
  se obtiene el tipo de operacion matematica elegida y se aplica en ambos valores
  */