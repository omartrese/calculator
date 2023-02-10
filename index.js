addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.number');
  const calcButtons = document.querySelectorAll('.operation');
  const equalTo = document.getElementById('equalTo');
  const result = document.getElementById('result');
  const deleteButton = document.getElementById('delete');

  let isFirst = true;

  let numberText;

  let firstValue;
  let secondValue;
  
    result.innerText = '0';
      
    for(let i = 0; i < buttons.length; i++)
    {
      buttons[i].addEventListener('click', () => {
          numberText = buttons[i].innerText;
          if(result.innerText.length < 37)
          {
            if(result.innerText === "0")
            {
              result.innerText = numberText;
            }else
            result.innerText += numberText;
          }

      })
    }

    

    deleteButton.addEventListener('click', () => {
      numberText = "0";
      result.innerText = numberText;
    })
  /* 8732485373 => int => firstValue 
  al obtener firstValue y SecondValue con el mismo procedimiento en cada uno
  se obtiene el tipo de operacion matematica elegida y se aplica en ambos valores
  */

})
