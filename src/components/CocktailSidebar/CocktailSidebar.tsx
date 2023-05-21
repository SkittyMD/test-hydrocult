import { FC } from 'react'
import bottle from '../../assets/bottle.png'
import './CocktailSidebar.css'
import calendar from '../../assets/calendar_sidebar.svg'
import intake_goal from '../../assets/intake_goal.png'
import CocktailSidebarDrinkLog from './CocktailSidebarDrinkLog/CocktailSidebarDrinkLog'

const CocktailSidebar: FC = () => {
    return (
        <div className='CocktailSidebar'>
            <div className='CocktailSidebar__date'>
                <img src={calendar} alt="calendar" />
                <button
                    className='CocktailSidebar__btn'
                >
                    Tue, 24 Nov 2021
                    <span className='CocktailSidebar__mark'></span>
                </button>
            </div>

            <div className='CocktailSidebar__water__bg'>
                <img
                    className='CocktailSidebar__water__bottle'
                    src={bottle}
                    alt="bottle"
                />
                <p className='CocktailSidebar__water__txt'>
                    Stay
                    Hydrated
                    and beat
                    heat.
                </p>
            </div>

            <img src={intake_goal} alt="intake_goal" />

            <CocktailSidebarDrinkLog />
        </div>
    )
};

export default CocktailSidebar