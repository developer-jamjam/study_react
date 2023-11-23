import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    // 컴포넌트가 없어질때 (컴포넌트가 언마운트 될 때 ! or 화면에서 컴포넌트가 사라질 때)무언가를 해야 할때 ! 
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]); // 딱 한번만 처리되어야 한다면 두번째 배열을 [] 빈 배열로 해주면 된다.

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
  list에 있는 각각의 child 는 유니크한 key를 가지고 있어야 한다. 
  각각의 item마다 고유한 key값을 가지고 있어야 해! 
 */