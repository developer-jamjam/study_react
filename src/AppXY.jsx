import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({x:0, y:0});
  //css transform : 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다.
  return (
    <div className='container' 
      onPointerMove={(e)=>{
        setPosition({x: e.clientX , y: e.clientY});
        //만약 수평으로만 이동이 가능할땐 ? 
        //setPosition((prev)=>({...prev, x:e.clientX}));
      }}>
      <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}} />
    </div>
  );
}
