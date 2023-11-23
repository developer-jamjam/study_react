import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter totalCnt={count} onClick={handleClick} />
        <Counter totalCnt={count} onClick={handleClick} />
      </div>
    </div>
  );
}

/*
  연결하고 싶을때는 함수의 참조값인 함수의 이름을 전달해야한다. 
  함수를 호출하면 X 
  https://legacy.reactjs.org/docs/handling-events.html
 */