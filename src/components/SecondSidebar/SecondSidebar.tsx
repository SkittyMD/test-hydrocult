import { FC } from 'react'
import bottle from '../../assets/bottle.png'
import './SecondSidebar.css'
import calendar from '../../assets/calendar_sidebar.svg'
import intake_goal from '../../assets/intake_goal.png'
import SecondSidebarDrinkLog from './SecondSidebarDrinkLog/SecondSidebarDrinkLog'

const SecondSidebar: FC = () => {
    return (
        <div className='SecondSidebar'>
            <div className='SecondSidebar__date'>
                <img src={calendar} alt="calendar" />
                <button
                    className='SecondSidebar__btn'
                >
                    Tue, 24 Nov 2021
                    <span className='SecondSidebar__mark'></span>
                </button>
            </div>

            <div className='SecondSidebar__water__bg'>
                <img
                    className='SecondSidebar__water__bottle'
                    src={bottle}
                    alt="bottle"
                />
                <p className='SecondSidebar__water__txt'>
                    Stay
                    Hydrated
                    and beat
                    heat.
                </p>
            </div>

            <img src={intake_goal} alt="intake_goal" />

            <SecondSidebarDrinkLog />
        </div>
    )
};

export default SecondSidebar