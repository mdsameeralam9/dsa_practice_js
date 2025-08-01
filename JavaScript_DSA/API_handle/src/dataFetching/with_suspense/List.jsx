import React from 'react'

// createResource.js
export const createResource = (promise) => {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (res) => {
            status = 'success';
            result = res;
        },
        (err) => {
            status = 'error';
            result = err;
        }
    );

    return {
        read() {
            if (status === 'pending') throw suspender;
            if (status === 'error') throw result;
            return result;
        },
    };
};



const fetchProducts = () =>
    fetch('https://fakestoreapi.com/products').then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    });

export const productResource = createResource(fetchProducts());


const List = () => {
    const products = productResource.read();
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
}

export default List