import { FC } from 'react'
import chart from '../../../assets/chart.png'
import './ContentChart.css'

const ContentChart: FC = () => {
    return (
        <div className='ContentChart'>
            <div>
                <p
                    className='ContentChart__second--text'

                >
                    Glass Intake
                </p>
                <p
                    className='ContentChart__main--text'
                >
                    200 ml
                </p>
            </div>
            <div className='ContentChart__glass'>
                <p className='chart__glass glass__1'>Glass 1</p>
                <p className='chart__glass glass__2'>Glass 2</p>
                <p className='chart__glass glass__3'>Glass 3</p>
            </div>
            <img
                className='ContentChart__img'
                src={chart}
                alt="chart"
            />
            <div className='ContentChart__time'>
                <p>6 am</p>
                <p>8 am</p>
                <p>10 am</p>
                <p>12 pm</p>
                <p>2 pm</p>
                <p>4 pm</p>
                <p>6 pm</p>
                <p>8 pm</p>
                <p>10 pm</p>
            </div>
        </div>
    )
};

export default ContentChart