import React from 'react'
import useFetch from './useFetch';
import CardLoader from '../../components/CardLoader';
import ProductCard from '../../components/Card';

const UseEffect_Component = () => {
  console.count('UseEffect_Component Rendered');

  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
  if (loading) return <CardLoader />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div className='wrapComponent'>
      <h1>UseEffect Component</h1>
      <div className="product-list">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default UseEffect_Component