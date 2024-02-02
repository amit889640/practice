import React, { useState } from 'react'
import './PersonDetailCard.css'

function PersonDetailCard({ props }) {
    // console.log(props.props);
    // const [list, setList] = useState(props);
    // console.log(list);
    return (
        <div>
            <div className='list'>
                {props.map((p) => (<div className='main-card'>
                    <div className='name'>
                        Name:-{p.Name}
                    </div>
                    <div className='age'>
                        Age:-{p.Age}
                    </div>
                    <div className='mobile'>
                        Mobile:-{p.Mobile}
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default PersonDetailCard