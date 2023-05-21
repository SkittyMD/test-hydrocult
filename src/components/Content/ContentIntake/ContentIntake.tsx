import { FC } from 'react'
import './ContentIntake.css'
import daily from '../../../assets/daily.png'
import average from '../../../assets/average.png'
import total from '../../../assets/total.png'
import IContentIntakeProps from './ContentIntakeItem/IContentIntakeItemProps'
import ContentIntakeItem from './ContentIntakeItem/ContentIntakeItem'

const ContentIntake: FC = () => {
    const dataContentIntake: IContentIntakeProps[] = [
        {
            background: '#EDFFEF',
            image: daily,
            title: 'Daily Intake',
            subtitle: '5000 ml',
            txt_color: '#55A55E'
        },
        {
            background: '#F4F2FF',
            image: average,
            title: 'Average Intake',
            subtitle: '2500 ml',
            txt_color: '#5E5498'
        },
        {
            background: '#FFF2EC',
            image: total,
            title: 'Total Intake',
            subtitle: '17000 ml',
            txt_color: '#9B715D'
        },
    ]

    return (
        <div className='ContentIntake'>
            {dataContentIntake.map(data => {
                return <ContentIntakeItem
                    background={data.background}
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                    txt_color={data.txt_color}
                    key={data.title}
                />
            })}
        </div>
    )
};

export default ContentIntake