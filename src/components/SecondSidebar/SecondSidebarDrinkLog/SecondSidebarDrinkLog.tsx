import { FC } from 'react'
import dots from '../../../assets/dots.svg'
import './SecondSidebarDrinkLog.css'
import ISecondSidebarDrinkLogProps from './SecondSidebarDrinkLogItem/ISecondSidebarDrinkLogItemProps';
import SecondSidebarDrinkLogItem from './SecondSidebarDrinkLogItem/SecondSidebarDrinkLogItem';

const SecondSidebarDrinkLog: FC = () => {
    const dataSecondSidebarDrinkLog: ISecondSidebarDrinkLogProps[] = [
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
        <div className='SecondSidebarDrinkLog'>
            <div className='SecondSidebarDrinkLog__header'>
                <p>Drink Log</p>
                <img className='SecondSidebarDrinkLog__header__dots' src={dots} alt="dots" />
            </div>
            {dataSecondSidebarDrinkLog.map((data, i) => {
                return <SecondSidebarDrinkLogItem
                    key={i}
                    time={data.time}
                    volume={data.volume}
                />
            })}
        </div>
    )
};

export default SecondSidebarDrinkLog