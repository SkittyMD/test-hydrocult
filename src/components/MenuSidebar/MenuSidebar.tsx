import { FC } from 'react'
import logo from '../../assets/logo.svg'
import category from '../../assets/category.svg'
import calendar from '../../assets/calendar.svg'
import notification from '../../assets/notification.svg'
import pie_chart from '../../assets/pie_chart.svg'
import settings from '../../assets/settings.svg'
import dots from '../../assets/dots.svg'
import user from '../../assets/user.png'
import MenuSidebarItem from './MenuSidebarItem/MenuSidebarItem';
import './MenuSidebar.css'

const MenuSidebar: FC = () => {
    const dataMenuSidebarItem = [
        { image: category, text: 'Dashboard' },
        { image: calendar, text: 'Schedule Reminder' },
        { image: pie_chart, text: 'Reports' },
        { image: notification, text: 'Notifications' },
        { image: settings, text: 'Settings' }
    ]
    return (
        <div
            className='MenuSidebar'
        >
            <a href="/">
                <img src={logo} alt="logo" />
            </a>

            <div className='MenuSidebar__navbar'>
                <h3 className='MenuSidebar__navbar__title'>Menu</h3>
                {dataMenuSidebarItem.map(data => {
                    return <MenuSidebarItem
                        image={data.image}
                        link='#'
                    >
                        {data.text}
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