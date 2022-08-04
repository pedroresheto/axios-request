import React, {useState} from "react";

import axios from 'axios';

const CallBackForm = () => {
    const [state, setState] = useState({name:'', phone:''});

    return (
        <div className="call-back-form">
            <input className="call-back-input" type="text" placeholder="Ваше имя"
                   name="name" value={state.name} onChange={e=>setState(s=>({...s, name: e.target.value}))}/><br/>
            <input className="call-back-input" type="text" placeholder="Ваше телефон"
                   name="phones" value={state.phone} onChange={e=>setState(s=>({...s, phone: e.target.value}))}/><br/>
            <button type="submit" className="call-back-button" onClick={()=>{
                axios.post('https://testapi.ru/lead?source=partner', {
                    idp: '668e135e-4c44-0d39-8e109947dc8c076a',
                    direction_id: '1',
                    branch_id: '3',
                    phones: [
                        `${state.phone}`,
                        ""
                    ],
                    name: `${state.name}`}).then(function (response){
                                console.log(response);}).catch(function (error){
                                console.log(error);
                            })
                        }}>Перезвоните мне</button>
        </div>
    );
};
export default CallBackForm;