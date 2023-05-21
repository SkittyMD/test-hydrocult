import { FC } from 'react'
import dots from '../../../assets/dots.svg'
import './CocktailSidebarDrinkLog.css'
import ICocktailSidebarDrinkLogProps from './CocktailSidebarDrinkLogItem/ICocktailSidebarDrinkLogItemProps';
import CocktailSidebarDrinkLogItem from './CocktailSidebarDrinkLogItem/CocktailSidebarDrinkLogItem';

const CocktailSidebarDrinkLog: FC = () => {
    const dataCocktailSidebarDrinkLog: ICocktailSidebarDrinkLogProps[] = [
        {
            time: '250 ml',
            volume: '8:00 am'
        },
        {
            time: '200 ml',
            volume: '9:30 am'
        },
        {
            time: '500 ml',
            volume: '11:00 am'
        },
        {
            time: '200 ml',
            volume: '01:00 pm'
        },
        {
            time: '250 ml',
            volume: '03:00 pm'
        }
    ]
    return (
        <div className='CocktailSidebarDrinkLog'>
            <div className='CocktailSidebarDrinkLog__header'>
                <p>Drink Log</p>
                <img className='CocktailSidebarDrinkLog__header__dots' src={dots} alt="dots" />
            </div>
            {dataCocktailSidebarDrinkLog.map((data, i) => {
                return <CocktailSidebarDrinkLogItem
                    key={i}
                    time={data.time}
                    volume={data.volume}
                />
            })}
        </div>
    )
};

export default CocktailSidebarDrinkLog