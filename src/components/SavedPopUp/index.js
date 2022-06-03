import React from 'react'

const SavedPopUp = ({ setSaved }) => {

    const deviceName = localStorage.getItem('deviceName')
    const imageUrl = localStorage.getItem('imageUrl')
    const desc = localStorage.getItem('desc')
    const model = JSON.parse(deviceName)
    const imagesrc = JSON.parse(imageUrl)
    const desctext = JSON.parse(desc)

    return (

        <div className="popup">
            <div className="exit" onClick={() => { setSaved(false) }}>x</div>
            <div className="popup-item">
                <div className="popup-img-wrapper">
                    <img src={imagesrc} alt="alt" />
                </div>
                <div className="item-title">Sercair</div>
                <div className="item-model">{model}</div>
                <div className="item-desc">{desctext}</div>
                <div className="coupon"> %50 İNDİRİM </div>
            </div>
        </div>
    )
}

export default SavedPopUp