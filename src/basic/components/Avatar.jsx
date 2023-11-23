import React from 'react';

export default function Avartar({ image, isNew }) {
    return (
        <div className='avatar'>
            <img className='photo' src={image} alt='avartar' />
            {isNew && <span className='new'>New</span>}
        </div>
    );
}

/*
    isNew 가 true 일 때만 <span> 으로 만든 New 요소가 보이도록 설정 한다.
*/