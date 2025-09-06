import react, { memo, useEffect, useState } from 'react';
const Button = ({ inc, dec, label }) => {
    console.log("Button render", label);

    return (
        <>
            <button onClick={inc}> {label} Inc</button>
            <button onClick={dec}> {label} Dec</button>
        </>
    )
}

export default memo(Button)