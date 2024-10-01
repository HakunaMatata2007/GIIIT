
// import { useState } from "react";
// import Counter from "./components/Counter";


// function App() {


//   return (
//     <div className="App">
//     <Counter/>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------------------------------------------------------
// import React, { useState } from 'react';

// function CounterApp() {
//   // Инициализируем состояние для хранения значения числа
//   const [count, setCount] = useState(0);

//   // Функции для изменения числа
//   const increment = (value) => {
//     setCount(count + value);
//   };

//   const decrement = (value) => {

  //     setCount(count - value);
//   };

//   return (
//     <div>
//       {/* Отображаем текущее значение числа */}
//       <h1>{count}</h1>

//       {/* Кнопки для изменения числа */}
//       <button onClick={() => increment(1)}>+1</button>
//       <button onClick={() => increment(2)}>+2</button>
//       <button onClick={() => increment(3)}>+3</button>
//       <button onClick={() => decrement(1)}>-1</button>
//       <button onClick={() => decrement(2)}>-2</button>
//       <button onClick={() => decrement(3)}>-3</button>
//     </div>
//   );
// }

// export default CounterApp;

//----------------------------------------------------------------------------------------------------------
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Функция для обработки нажатия на кнопку
  const handleClick = (label) => {
    const value = parseInt(label); // Преобразуем текст в число
    let newCount = count + value;

    // Условие для предотвращения выхода за пределы [0, 10]
    if (newCount > 10) {
      newCount = 10;
    } else if (newCount < 0) {
      newCount = 0;
    }

    setCount(newCount); // Устанавливаем новое значение
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleClick('+1')}>+1</button>
      <button onClick={() => handleClick('+2')}>+2</button>
      <button onClick={() => handleClick('+3')}>+3</button>
      <button onClick={() => handleClick('-1')}>-1</button>
      <button onClick={() => handleClick('-2')}>-2</button>
      <button onClick={() => handleClick('-3')}>-3</button>
    </div>
  );
}

export default App;
