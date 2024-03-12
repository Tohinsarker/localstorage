import React, { useEffect, useState } from 'react';
import Botle from '../Bottle/Botle';
import './Cars.css';
import { addToLocalStorage } from '../../utilities/localStorage';

const Cars = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./../../../public/bottles.json')
        .then(res =>res.json())
        .then(data =>setData(data))
    },[]);


    const handleAddToCard = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }

    return (
        <div className='bottles'>
            {
                
                data.map(data =><Botle 
                     key={data.id}
                     handleAddToCard={handleAddToCard}
                     data={data}></Botle>)
            }
        </div>
    );
};

export default Cars;