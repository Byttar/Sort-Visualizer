import React, { useEffect } from 'react'
import './graph.scss';

interface IGraphProps {
    bars?: Array<number>
}

interface iBarProps{
    height: number,
    Color?: string
}

const Bar:React.FC<iBarProps> = function({height, Color}){

    const _style = {
        height: `${height}px`,
        background: `rgba(${height % 3}, ${height / 1.2 }, ${height/2})`, 
        width: '50px',
        border: '1px solid gray',
    }

    return(
        <div style={_style}/>
    )
}

const Graph: React.FC<IGraphProps> = function({ bars }){

    return (
        <div className="Graph">
            {bars?.map((item, index) => {
                return <Bar height={item} key={`bar${index*3}`} />
            })}
        </div>
    )
}


export default Graph;
