import { FC } from 'react'
import logo from '../../assets/logo.png'
import category from '../../assets/category.svg'
import calendar from '../../assets/calendar.svg'
import notification from '../../assets/notification.svg'
import pie_chart from '../../assets/pie_chart.svg'
import settings from '../../assets/settings.svg'
import dots from '../../assets/dots.svg'
import user from '../../assets/user.png'
import MenuSidebarItem from './MenuSidebarItem/MenuSidebarItem';
import './MenuSidebar.css'
import IMenuSidebarItemProps from './MenuSidebarItem/IMenuSidebarItemProps'

const MenuSidebar: FC = () => {
    const dataMenuSidebarItem: IMenuSidebarItemProps[] = [
        { image: category, children: 'Dashboard', link: '#' },
        { image: calendar, children: 'Schedule Reminder', link: '#' },
        { image: pie_chart, children: 'Reports', link: '#' },
        { image: notification, children: 'Notifications', link: '#' },
        { image: settings, children: 'Settings', link: '#' }
    ]
    return (
        <div
            className='MenuSidebar'
        >
            <a href="/">
                <img
                    className='MenuSidebar__logo'
                    src={logo}
                    alt="logo"
                />
            </a>

            <div className='MenuSidebar__navbar'>
                <h3 className='MenuSidebar__navbar__title'>Menu</h3>
                {dataMenuSidebarItem.map(data => {
                    return <MenuSidebarItem
                        image={data.image}
                        link={data.link}
                        key={data.image}
                    >
                        {data.children}
                    </MenuSidebarItem>
                })}
            </div>

            <div className='MenuSidebar__user'>
                <img
                    className='MenuSidebar__user__img'
                    src={user}
                    alt="user_img"
                />
                <div className='MenuSidebar__user__text'>
                    <p
                        className='MenuSidebar__user__name'
                    >
                        Mathew Perry
                    </p>
                    <p
                        className='MenuSidebar__user__email'
                    >
                        mathewperry@xyz.com
                    </p>
                </div>
                <button className='MenuSidebar__user__btn'>
                    <img src={dots} alt="" />
                </button>
            </div>
        </div>
    )
};

export default MenuSidebar