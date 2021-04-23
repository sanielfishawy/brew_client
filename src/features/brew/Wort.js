import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditableLabel from './EditableLabel';
import { updateWort } from './brewSlice'


export const Wort = (props) => {
    let wort = useSelector( state =>  state.brew.worts[props.wort_id])
    let draft_wort = Object.assign({}, wort);

    const dispatch = useDispatch()
    const dispatch_wort = () => {
        dispatch(updateWort({wort_id: wort.id, wort: draft_wort}))
    }


    const handle_name_change = value => {
        draft_wort.name = value;
        dispatch_wort()
    }

    const handle_color_change = value => {
        draft_wort.tilt_color = value;
        dispatch_wort()
    }

    const handle_set_temp_change = value => {
        draft_wort.set_temp = value;
        dispatch_wort()
    }

    const handle_hysteresis_change = value => {
        draft_wort.hysteresis = value;
        dispatch_wort()
    }

    const handle_cooler_sh_change = value => {
        draft_wort.cooler_shelby_addr = value;
        dispatch_wort()
    }

    const handle_heater_sh_change = value => {
        draft_wort.heater_shelby_addr = value;
        dispatch_wort()
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