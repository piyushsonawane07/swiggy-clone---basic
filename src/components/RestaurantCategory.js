import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'
import MenuItemCard from './MenuItemCard';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const { itemCards } = data; 

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div onClick={handleClick} className='accrodin-tab'>
                <span>{data.title}&nbsp; ({data.itemCards.length})</span>
                <span>{!showItems?<ChevronDown/>:<ChevronUp/>}</span>
            </div>
            <div>
                {showItems && <MenuItemCard key={data.title} itemCards={itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;