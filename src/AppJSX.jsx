import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '404';
  const blacklist = ['베르무트','버본','진','큐라소']; 
  return (
    <>
        <h1 className='aqua'>Hello!</h1>
        <h1 className='aqua'>{`Hello!Dev_ ${name}`}</h1>
        <h2>Hello!!</h2>
        <p>{name}</p> 
        <ul>
          <li>베르무트</li>
          <li>버본</li>
          <li>진</li>
        </ul>
        <ul>
          {
            blacklist.map((item) => (
              <li>{item}</li>
            ))
          }
          { blacklist.map((item) =>{return <li>{item}</li>})}
        </ul>
    </>

  );
}

export default AppJSX;
/*
  컴포넌트는 꼭 하나의 태그를 반환 해야 한다.
  다수의 태그를 반환해야 한다면 부모태그로 감싸서 반환한다.

  class 가 아니라 className을 사용한다. 

  javascript코드 사용할 수 있다. {}로 묶어주어야 한다. 

  React는 자바스크립트 Library

  .map() , 화살표함수 등 기존 자바스크립트 문법은 익혀둬야 한다.
*/
