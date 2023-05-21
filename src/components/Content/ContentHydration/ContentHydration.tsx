import { FC } from 'react'
import './ContentHydration.css'
import IContentHydrationItemProps from './ContentHydrationItem/IContentHydrationItemProps';
import grape from '../../../assets/grape.png'
import watermelon from '../../../assets/watermelon.png'
import orange from '../../../assets/orange.png'
import ContentHydrationItem from './ContentHydrationItem/ContentHydrationItem';

const ContentHydration: FC = () => {
    const dataContentHydration: IContentHydrationItemProps[] = [
        {
            background: '#EDFFEF',
            image: watermelon,
            title: 'Watermelon',
            subtitle: 'It contains 97% water in it. A good choice to stay hydrated.'
        },
        {
            background: '#FFF2EC',
            image: orange,
            title: 'Oranges',
            subtitle: 'It contains 72% water in it. It’s tangy nature helps with skin care.'
        },
        {
            background: '#F4F2FF',
            image: grape,
            title: 'Grapes',
            subtitle: 'It contains vitamin ‘C’ which helps with retaining water.'
        }
    ]

    return (
        <div className='ContentHydration'>
            <div
                className='ContentHydration__header'
            >
                <div>
                    <p
                        className='ContentHydration__header__title'
                    >
                        Hydration Tips
                    </p>
                    <p
                        className='ContentHydration__header__subtitle'
                    >
                        Consuming fruit juices keeps up the hydration level.
                    </p>
                </div>
                <button className='ContentHydration__header__btn'>
                    See All
                    <span className='ContentHydration__header__mark'></span>
                </button>
            </div>
            <div className='ContentHydration__main'>
                {dataContentHydration.map(data => {
                    return <ContentHydrationItem
                        title={data.title}
                        background={data.background}
                        image={data.image}
                        subtitle={data.subtitle}
                        key={data.title}
                    />
                })}
            </div>
        </div>
    )
};

export default ContentHydration