import React from 'react'
import './Find.scss'

export const Find = () => {
    return (
        <div className="find-us">
            <a
                href="https://www.facebook.com/"
                target={'_blank'}
                rel="noreferrer"
            >
                <div className="block facebook"></div>
            </a>

            <a href="https://twitter.com/" target={'_blank'} rel="noreferrer">
                <div className="block twitter"></div>
            </a>

            <a
                href="https://www.google.com/"
                target={'_blank'}
                rel="noreferrer"
            >
                <div className="block google"></div>
            </a>

            <a
                href="https://www.linkedin.com/"
                target={'_blank'}
                rel="noreferrer"
            >
                <div className="block linkedin"></div>
            </a>

            <a
                href="https://www.behance.net/"
                target={'_blank'}
                rel="noreferrer"
            >
                <div className="block behance"></div>
            </a>
        </div>
    )
}
