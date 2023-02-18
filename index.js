addEventListener('DOMContentLoaded', () => {
  const numButtons = document.querySelectorAll('.number');
  const calcButtons = document.querySelectorAll('.operation');
  const equalTo = document.getElementById('equalTo');
  const resultText = document.getElementById('result');
  const deleteButton = document.getElementById('delete');
  let currentNumber; // the number that has the current value in string
  let isDone = false;
  let firstNumber = "";
  let secondNumber = "";

  let strOperation = [];

  resultText.innerText = "0";
  

  for(let i = 0; i < numButtons.length; i++)
  {
    let clickedNumber;    

    numButtons[i].addEventListener('click', () => {
      clickedNumber = numButtons[i].innerText;
      // console.log("the number that has been clicked is: " + clickedNumber);

      resultText.style = "color:black";

      if(resultText.innerText.length < 37)
      {
        if(isDone)
        {
          resultText.innerText = "0";
          resultText.innerText = clickedNumber;
          isDone = false;
        } else 
        {
          resultText.innerText += clickedNumber;
        }          
      } else currentNumber = resultText.innerText;

      currentNumber = resultText.innerText;
      // console.log("CURRENT NUMBER IS: " + currentNumber);
    })
  }

  for(let i = 0; i < calcButtons.length; i++)
  {
    calcButtons[i].addEventListener('click', () => {
      strOperation.unshift(calcButtons[i].innerText);
      // if(strOperation.length > 2)
      // {
      //   strOperation.shift();
      // }
      
      if(firstNumber == "")
      {
        firstNumber = currentNumber;
        console.log("***1st*** NUMBER: " + firstNumber);
      } else
      {
        secondNumber = currentNumber;
        console.log("***2nd*** NUMBER: " + secondNumber);
      }
      
      if(firstNumber != "" && secondNumber != "")
      {
        firstNumber = calculate(strOperation.pop());
        console.log("***AGAIN 1st*** NUMBER: " + firstNumber);
        secondNumber = "";
      }
      
      console.log("the ACTUAL OPERATION is: " + strOperation);
      isDone = true;
    })  
  }

  deleteButton.addEventListener('click', ACbutton);

  equalTo.addEventListener('click', () => {
    secondNumber = currentNumber;
    resultText.innerText = calculate(strOperation);
    currentNumber = resultText.innerText;
    console.log("***2nd*** NUMBER is: " + secondNumber);
    console.log("THE RESULT of " + firstNumber + " " + strOperation + " " + secondNumber + " is: " + currentNumber);
    strOperation = [];
    firstNumber = currentNumber;
    secondNumber = "";
    console.log("***1st*** NUMBER is: " + firstNumber);
  });

  function ACbutton()
  {
    resultText.innerText = "0";
    currentNumber = resultText.innerText;
    firstNumber = "";
    secondNumber = "";
    strOperation = [];
    console.clear();
    console.log(" YOU HAVE CLICKED *AC* and the CURRENT NUMBER is: " + currentNumber);
  }
  

  function calculate(operation)
  {
    let firstValue = parseInt(firstNumber);
    let secondValue = parseInt(secondNumber);
    let result;
    switch(operation[0])
    {
      case "+":
        result = firstValue + secondValue;
        break;

      case "-":
        result = firstValue - secondValue;
        break;
      
      case "x":
        result = firstValue * secondValue;
        break;

      case "/":
        result = firstValue / secondValue;
        break;

      default:
        result = parseInt(currentNumber);
        break;  
    }

    return result;
  } 
})
