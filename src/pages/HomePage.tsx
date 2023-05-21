import { FC } from 'react'
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Content from '../components/Content/Content';
import './HomePage.css'

const HomePage: FC = () => {
    return (
        <div
            className='HomePage'
        >
            <MenuSidebar />
            <Content />
        </div>
    )
};

export default HomePage