import React, { useEffect } from 'react';
import useAction from './useAction'; // Adjust the import path as necessary

const url_ = 'https://fakestoreapi.com/products';

const ProductManager = () => {
  const {
    data,
    loading,
    error,
    refetch,
    post,
    put,
    delete: deleteProduct,
  } = useAction(url_);

  // Example: POST a new product
  const handleAddProduct = async () => {
    await post({
      title: 'New Product',
      price: 29.99,
      description: 'A new product added via POST',
      image: 'https://via.placeholder.com/150',
      category: 'electronics',
    });
    refetch(url_); // Refresh the list
  };

  // Example: PUT (update) a product
  const handleUpdateProduct = async (id) => {
    await put(id, {
      id,
      title: 'Updated Product Title',
      price: 39.99,
    });
    refetch(url_);
  };

  // Example: DELETE a product
  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    refetch(url_);
  };

  useEffect(() => {
    // Initial fetch happens automatically
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product Manager</h2>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {data.length > 0 && data?.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
