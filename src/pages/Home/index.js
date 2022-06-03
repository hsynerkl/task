import Card from '../../components/Card';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { useState } from 'react'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Products");
    return (
        <div>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Products":
            return <Card />
        case "Contact":
            return <Contact />
        default:
            return <Card />
    }
}

export default HomePage