import { FC } from 'react'
import './Content.css'
import ContentHeader from './ContentHeader/ContentHeader'
import ContentWeather from './ContentWeather/ContentWeather'
import ContentIntake from './ContentIntake/ContentIntake'
import ContentChart from './ContentChart/ContentChart'
import ContentHydration from './ContentHydration/ContentHydration'

const Content: FC = () => {
    return (
        <div className='Content'>
            <div className='container'>
                <ContentHeader />
                <main className='Content__main'>
                    <ContentWeather />
                    <ContentIntake />
                    <ContentChart />
                    <ContentHydration />
                </main >
            </div>
        </div >
    )
};

export default Content