import React, { useState } from 'react';

export default function Counter({ totalCnt, onClick }) {
  const [count, setCount] = useState(0);
  //배열의 첫번째 값 count , 배열의 두번째 값 setCount 
  return (
    <div className='counter'>
      <p className='number'>{count} <span className='total'>/ {totalCnt}</span></p>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}

/*
  UI와 밀접하게 관련있는 데이터의 경우는 state에 보관 해주어야한다. 
  useState는 변경이 가능한 value를 return 한다.
  초기값을 전달하거나 초기값을 설정할 수 있는 callback 함수를 전달할 수 있고 
  useState를 호출하면 return 값으로는 배열을 return 한다. 
  배열의 첫번째 item  = 초기값 (상태를 확인할 수 있는 변수)
  배열의 두번째 item = 그 상태를 update 할 수 있는 (set할 수있는 ) 함수 
*/
