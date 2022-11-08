import React from 'react'
import { useState } from 'react'
import PostService from '../components/API/PostService'
import ItemCard from '../components/ItemCard'

const TittlePage = () => {

  const [products] = useState([
    {id:1, title: 'item 1', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:2, title: 'item 2', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:3, title: 'item 3', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:4, title: 'item 4', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:5, title: 'item 5', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'},
    {id:6, title: 'item 6', price: '324$', disc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione aperiam quisquam corporis'}
  ])
  const [newProd, setProd] = useState()

  async function getProd () {
    const responce = await PostService.getAll()
    setProd(responce)
    console.log(newProd)
  }


  return (
    <>
      <div className='container'>
        <div className='title_container'>
          <div className='title_text_container'>
            <h1>Tittle Name</h1>
            <button onClick={getProd}>APITEST</button>
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