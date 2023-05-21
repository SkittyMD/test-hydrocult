import { FC } from 'react'
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Content from '../components/Content/Content';
import './HomePage.css'
import SecondSidebar from '../components/SecondSidebar/SecondSidebar';

const HomePage: FC = () => {
    return (
        <div
            className='HomePage'
        >
            <MenuSidebar />
            <Content />
            <SecondSidebar />
        </div>
    )
};

export default HomePage