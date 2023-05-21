import { FC } from 'react'
import IContentHydrationItemProps from './IContentHydrationItemProps';
import './ContentHydrationItem.css'

const ContentHydrationItem: FC<IContentHydrationItemProps> = ({ background, image, subtitle, title }) => {
    return (
        <div
            className='ContentHydrationItem'
            style={{ background: background }}
        >
            <div className='ContentHydrationItem__img__block'>
                <img
                    className='ContentHydrationItem__img'
                    src={image}
                    alt="image"
                />
            </div>
            <h3 className='ContentHydrationItem__title'>{title}</h3>
            <p className='ContentHydrationItem__subtitle'>{subtitle}</p>
        </div>
    )
};

export default ContentHydrationItem
