import React, { Dispatch, SetStateAction } from 'react'
import './menu.scss';

interface IProps {
    Sorts?: Array<string>,
    Actions: Array<{name: string, action: () => void}>,
    Time: string,
    handler: Dispatch<SetStateAction<number>>
}

const Menu: React.FC<IProps> = function({ Sorts, Actions, handler, Time }){
    return (
        <div className="Menu">
            <div className="Time">Elapsed Time: {Time || '0.000'}</div>
            <fieldset className="Sorts">
                 <legend>Sorts:</legend>
                {Sorts?.map((x, index) => {
                    return <label>
                        {x}
                        <input type="radio" name="sorts" onChange={() => handler(index)}></input>
                    </label>
                })}
            </fieldset>
            <div className="Actions">
                {Actions.map(y => {
                    return <button onClick={() => y.action()}>{y.name}</button>
                })}
            </div>
        </div>
    )
}

export default Menu;
