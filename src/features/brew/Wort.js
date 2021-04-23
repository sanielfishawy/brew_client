import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditableLabel from './EditableLabel';


export const Wort = (props) => {
    const wort = useSelector( state =>  state.brew.worts[props.wort_id])

    const handle_name_change = value => {
        console.log(value);
    }

    const handle_color_change = value => {
        console.log(value);
    }

    const handle_set_temp_change = value => {
        console.log(value);
    }

    const handle_hysteresis_change = value => {
        console.log(value);
    }

    const handle_cooler_sh_change = value => {
        console.log(value);
    }

    const handle_heater_sh_change = value => {
        console.log(value);
    }

    return (

        <div>
            {/* <div>{wort.id}</div> */}
            <div>
                <EditableLabel 
                    value={wort.name}
                    onFocusOut={handle_name_change}
                />
            </div>
            <div>
                <EditableLabel 
                    value={wort.tilt_color}
                    onFocusOut={handle_color_change}
                />                
            </div>
            <div>{wort.temp}</div>
            <div>
                <EditableLabel 
                    type='number'
                    value={wort.set_temp}
                    onFocusOut={handle_set_temp_change}
                />
            </div>
            <div>
                <EditableLabel 
                    type='number'
                    value={wort.hysteresis}
                    onFocusOut={handle_hysteresis_change}
                />
            </div>
            <div>{wort.specific_gravity}</div>
            <div>
                <EditableLabel 
                    type='url'
                    value={wort.cooler_shelby_addr}
                    onFocusOut={handle_cooler_sh_change}
                />
            </div>
            <div>
                <EditableLabel 
                    type='url'
                    value={wort.heater_shelby_addr}
                    onFocusOut={handle_heater_sh_change}
                />
            </div>
            <div>{wort.rssi}</div>
        </div>
    )

}