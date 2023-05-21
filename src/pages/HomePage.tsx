import { FC } from 'react'
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Content from '../components/Content/Content';
import CocktailSidebar from '../components/CocktailSidebar/CocktailSidebar';
import './HomePage.css'

const HomePage: FC = () => {
    return (
        <div
            className='HomePage'
        >
            <MenuSidebar />
            <Content />
            <CocktailSidebar />
        </div>
    )
};

export default HomePage