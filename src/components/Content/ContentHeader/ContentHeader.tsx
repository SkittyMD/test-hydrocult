import { FC } from 'react'
import InputFind from '../../UI/InputFind/InputFind';
import './ContentHeader.css'

const ContentHeader: FC = () => {
    return (
        <header className='ContentHeader'>
            <h2 className='ContentHeader__title'>
                Welcome back <strong>Mathew!</strong>
            </h2>
            <InputFind />
        </header>
    )
};

export default ContentHeader