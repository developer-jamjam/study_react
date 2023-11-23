import React from 'react';
import Avartar from './Avatar';

export default function Profile({ image, name, title, isNew }) {
    return (
        <div className='profile'>
            <Avartar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

/*
    component에 속성으로 원하는 key와 value를 명시하면 props 라는 객체로 전달된다.
    전달받은 props값을 이용하여 UI에 표현할 수 있다.
    구조분해 할당을 이용하여 props.name이 아닌 name 으로 쓸 수 있어 코드가 훨씬 더 깔끔해진다. 
*/