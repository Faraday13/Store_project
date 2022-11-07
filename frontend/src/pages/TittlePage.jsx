import React from 'react'
import { useState } from 'react'
import ItemCard from '../components/ItemCard'

const TittlePage = () => {

  const [products, setProducts] = useState([
    {id:1, title: 'item 1', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:2, title: 'item 2', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:3, title: 'item 3', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:4, title: 'item 4', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:5, title: 'item 5', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:6, title: 'item 6', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:7, title: 'item 7', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:8, title: 'item 8', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:9, title: 'item 9', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:10, title: 'item 10', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
  ])
  return (
    <>
      <div className='container'>
        <div className='title_container'>
          <div className='title_text_container'>
            <h1>Tittle Name</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className='main_products_container'>
          <div className="main_disc_container">
            <h2>Популярные товары: </h2>
          </div>
          <div className='product_wrapper'>
            {products.map((x)=> (<ItemCard item={x} key={x.id}/>))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="review_container">
          <h1>Review</h1>
        </div>
      </div>
    </>
  )
}

export default TittlePage