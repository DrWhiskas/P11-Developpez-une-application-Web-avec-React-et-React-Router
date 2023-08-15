import React, { useState} from 'react'
import ArrowDown from '../assets/ArrowDown.png'
import ArrowUp from '../assets/ArrowUp.png'
import   '../style/dropdown.css'


export default function Dropdown ({titles, descriptions}){
    const [open, setOpen] = useState(false)

    const toggleDropdown = () => {
        setOpen(!open)

    }
   
    return(
        <div className='dropdown'>
            <div className='dropdown__btn w' onClick={toggleDropdown}>
                    <h2 className='dropdown__btn__title'>
                        {titles}
                    </h2> 
            {open ? <img src={ArrowDown} alt='arrow down' className='dropdown__btn__arrow' /> : <img src={ArrowUp} alt='arrow up' className='dropdown__btn__arrow'  /> }

            </div>
            {open && (
                <div className='dropdown__content w'>
                        <div className='dropdown__content__item'>
                            {descriptions}   
                        </div>
                </div>
            )
            }
        </div>
    )
}