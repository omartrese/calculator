addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttonNumber');
  const equalTo = document.getElementById('equalTo');
  const result = document.getElementById('result');
  let firstValue;
  let firstValueNum;

  let secondValue;
  let secondValueNum;

  result.innerText = '';

  for(let i = 0; i < buttons.length - 1; i++)
  {
    buttons[i].addEventListener('click', () => {
      firstValue = buttons[i].innerHTML;
      result.innerText += firstValue;
    })
  }

  buttons[10].addEventListener('click', () => {

    

  })

  /* 8732485373 => int => firstValue 
  al obtener firstValue y SecondValue con el mismo procedimiento en cada uno
  se obtiene el tipo de operacion matematica elegida y se aplica en ambos valores
  */

})
