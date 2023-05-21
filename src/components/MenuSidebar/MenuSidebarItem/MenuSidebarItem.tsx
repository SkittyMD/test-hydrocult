import { FC } from 'react'
import IMenuSidebarItemProps from './IMenuSidebarItemProps';
import './MenuSidebarItem.css'

const MenuSidebarItem: FC<IMenuSidebarItemProps> = ({ image, children, link }) => {
    return (
        <a className='MenuSidebar__Item' href={link}>
            <img
                className='MenuSidebar__Item__img'
                src={image}
                alt={image}
            />
            <p
                className='MenuSidebar__Item__text'>
                {children}
            </p>
        </a>
    )
};

export default MenuSidebarItem