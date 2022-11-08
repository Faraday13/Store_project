import React from 'react'

const ItemCard = ({ item }) => {

    return (
        <div className='item_container'>
            <div className='item_wrapper'>
                <div className='img_container'>
                    <img className='img_product' src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png?w=826&t=st=1667643922~exp=1667644522~hmac=cf83c907bd14ffc334c019fd5227699c98c6b49d9f007a32f110d6a287eb9ac3" alt="" />
                </div>
                <div className='product_container'>
                    <div className='name_wrapper'>
                        <h3>{item.id}</h3>
                    </div>
                    <div className='disc_wrapper'>
                        <p>discription :</p>
                        <p>{item.disc}</p>
                        <p>price :</p>
                        <p>{item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard