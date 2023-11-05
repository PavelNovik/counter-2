import React from 'react';
import s from './Settings.module.css'
const Settings = () => {
    return (
        <div className={s.settings}>
            <label >max value:<input type={"number"}/></label>
            <label >start value:<input type={"number"}/></label>

        </div>
    );
};

export default Settings;