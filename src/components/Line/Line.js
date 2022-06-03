import React from 'react'
import './Line.scss'
import line from 'assets/divide-line.png'

export const Line = () => {
    return (
        <>
            <div className="content__header">
                <div className="content__header-divide-line">
                    <img src={line} alt="" />
                </div>
            </div>
        </>
    )
}
