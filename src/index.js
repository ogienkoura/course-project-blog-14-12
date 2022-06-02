import React from 'react'
import ReactDOM from 'react-dom/client'

const el = (
    <div>
        <div>
            <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
            </ul>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corporis magni perferendis adipisci eligendi obcaecati.
            Aspernatur deleniti magni soluta. Nulla cum autem nihil ducimus
            optio quam ipsam earum magni vero.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(el)
