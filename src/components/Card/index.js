import './Card.css'
import Item from '../Item'
import Loading from '../Loading'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Card = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [saved, setSaved] = useState(localStorage.getItem('deviceName'));
    const fetchData = async () => {
        setIsLoading(true);
        const { data } = await axios.get(
            "https://landingpage.sercair.com/api/V1/device/all"
        );

        setProducts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <div className="max-width card">
            <div className="products">
                {isLoading ? <Loading /> : products.data.map((product, i) => (
                    <Item setSaved={setSaved} saved={saved} key={i} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Card
