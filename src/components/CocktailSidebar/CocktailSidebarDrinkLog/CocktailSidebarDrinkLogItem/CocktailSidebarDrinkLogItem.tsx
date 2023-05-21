import { FC } from 'react'
import './CocktailSidebarDrinkLogItem.css'
import ICocktailSidebarDrinkLogItemProps from './ICocktailSidebarDrinkLogItemProps';

const CocktailSidebarDrinkLogItem: FC<ICocktailSidebarDrinkLogItemProps> = ({ time, volume }) => {
    return (
        <div className='CocktailSidebarDrinkLogItem'>
            <p className='CocktailSidebarDrinkLogItem__time'>{time}</p>
            <p className='CocktailSidebarDrinkLogItem__volume'>{volume}</p>
        </div>
    )
};

export default CocktailSidebarDrinkLogItem