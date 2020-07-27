import React from 'react';
import { ReactComponent as FilterBtnIcon } from '../Icons/compare-outline.svg';
import '../CSS/App.css'

const FilterBtn = (props) => {

    const handleClick = () => {
        props.filterFn()
    }
    return (
        <div  className='filter-container'>
            <div  className='filter-btn' onClick={ handleClick }>
                <FilterBtnIcon className='filter-icon' />
            </div>
        </div>
    )
}

export default FilterBtn;