import './Popup.css'
import { useState, useEffect } from 'react';

const PopUp = ({ product, setPopUp }) => {

    useEffect(() => {
        if (!localStorage.getItem('urun')) {
            localStorage.setItem('deviceName', JSON.stringify(product.deviceName))
            localStorage.setItem('imageUrl', JSON.stringify(product.imageUrl))
            localStorage.setItem('desc', JSON.stringify(product.desc))
        }
        else {
            return;
        }


    }, [])

    return (
        <div className="popup">
            <div className="exit" onClick={() => { setPopUp(false) }}>x</div>
            <div className="popup-item">
                <div className="popup-img-wrapper">
                    <img src={product.imageUrl} alt="alt" />
                </div>
                <div className="item-title">Sercair</div>
                <div className="item-model">{product.deviceName}</div>
                <div className="item-desc">{product.desc}</div>
            </div>
        </div>
    )
}

export default PopUp