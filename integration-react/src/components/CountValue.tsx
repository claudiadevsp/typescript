import React from 'react'

interface CountValueProps {
    count: number
}

export default (props: CountValueProps) =>     
    <p>{props.count}</p>
    
