import { FC } from 'react'
import sun from '../../../assets/sun.svg'
import './ContentWeather.css'

const ContentWeather: FC = () => {
    return (
        <div className='ContentWeather'>
            <img src={sun} alt="sun" />
            <p>
                <strong>26°C</strong>
            </p>
            <p>
                It’s a <strong>Sunny Day</strong> today!
            </p>
            <p
                className='ContentWeather__second--text'
            >
                Don’t forget to take your water bottle with you.
            </p>
        </div>
    )
};

export default ContentWeather