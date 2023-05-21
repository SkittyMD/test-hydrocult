import { FC } from 'react'
import IContentIntakeProps from './IContentIntakeItemProps';
import './ContentIntakeItem.css'

const ContentIntakeItem: FC<IContentIntakeProps> = ({ background, image, subtitle, title, txt_color }) => {
    return (
        <div
            style={{ background: `${background}`, color: txt_color }}
            className='ContentIntakeItem'
        >
            <img
                className='ContentIntakeItem__img'
                src={image}
                alt="image"
            />
            <div>
                <p
                    className='ContentIntakeItem__title'
                >
                    {title}
                </p>
                <p
                    className='ContentIntakeItem__text'
                >
                    {subtitle}
                </p>
            </div>
        </div>
    )
};

export default ContentIntakeItem