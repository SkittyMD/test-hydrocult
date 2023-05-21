import { FC } from 'react'
import './SecondSidebarDrinkLogItem.css'
import ISecondSidebarDrinkLogItemProps from './ISecondSidebarDrinkLogItemProps';

const SecondSidebarDrinkLogItem: FC<ISecondSidebarDrinkLogItemProps> = ({ time, volume }) => {
    return (
        <div className='SecondSidebarDrinkLogItem'>
            <p className='SecondSidebarDrinkLogItem__time'>{time}</p>
            <p className='SecondSidebarDrinkLogItem__volume'>{volume}</p>
        </div>
    )
};

export default SecondSidebarDrinkLogItem