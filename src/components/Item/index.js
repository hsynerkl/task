import './Item.css';
import { useState } from 'react'
import PopUp from '../PopUp'
import SavedPopUp from '../SavedPopUp'


const Item = ({ product, setSaved, saved }) => {

    const [popUp, setPopUp] = useState(false);




    return (
        <div className="item">
            <div className="img-wrapper">
                <img src={product.imageUrl} alt="alt" />
            </div>
            <div className="item-title">Sercair</div>
            <div className="item-model">{product.deviceName}</div>
            <div className="item-desc">{product.desc}</div>
            <button className="btn" onClick={() => setPopUp(true)}>Detay</button>
            {saved && <SavedPopUp setSaved={setSaved} />}
            {popUp && <PopUp popUp={popUp} setPopUp={setPopUp} product={product} />}

        </div>

    )
}

export default Item