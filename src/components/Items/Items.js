import React, { useState } from 'react';
import Item from '../../data/Item';
import '../../assets/scss/app.scss';

const Items = () => {
    const [items, setItems] = useState(Item)

    const filterItem = (cateItem) => {
        const updatedItems = Item.filter((currentItem) => {
            return currentItem.category === cateItem;
        })

        setItems(updatedItems);
    }

    return (
        <div className='container my-3'>
            <div className='d-flex justify-content-center mb-3'>
                <button className='btn' onClick={() => setItems(Item)}>All</button>
                <button className='btn' onClick={() => filterItem('breakfast')}>Breakfast</button>
                <button className='btn' onClick={() => filterItem('lunch')}>Lunch</button>
                <button className='btn' onClick={() => filterItem('dinner')}>Dinner</button>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    items.map((item) => {
                        return (
                            <div className="col">
                                <div className="card border-0">
                                    <img src={item.image} className="card-img-top rounded-4" alt="..." />
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text fw-bold">{item.price}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Items;