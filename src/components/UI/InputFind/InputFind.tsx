import { FC } from 'react'
import './InputFind.css'
import magnifier from '../../../assets/magnifier.svg'

const InputFind: FC = () => {
    return (
        <div className='InputFind__block'>
            <img src={magnifier} alt='magnifier' className='InputFind__magnifier'></img>
            <input
                className='InputFind_inp'
                placeholder='Search'
            />
        </div>
    )
};

export default InputFind