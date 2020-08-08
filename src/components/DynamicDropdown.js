import React, { useState, useEffect } from 'react';
import Select from 'react-select'

const DynamicDropdown=({claimStatus})=>{
    const [options,setOptions]=useState({
        primaryOptions:[{label:"pending",value:"pending"},{label:"approved",value:"approved"}],
        subStatusOne:getSubStatusOne(claimStatus.primaryStatus)
    })

    function getSubStatusOne(opt){
       if(opt==="pending"){
           return [{value:"pending Reason1",label:"pending Reason1"},{value:"pending Reason2",label:"pending Reason2"}]
       }
       if(opt==="approved"){
        return [{value:"approved Reason1",label:"approved Reason1"},{value:"approved Reason2",label:"approved Reason2"}]
    }
    }
    const [optionValue,setOptionValue]=useState({
        primaryStatus:{value:claimStatus.primaryStatus,label:claimStatus.primaryStatus},
        subStatusOne:{value:claimStatus.subStationOne,label:claimStatus.subStatusOne},
        subStatusTwo:{value:claimStatus.subStationTwo,label:claimStatus.subStatusTwo},
    })

    useEffect(()=>{
        
    },[optionValue])

    
    const handleChange=(e)=>{
        setOptionValue({...optionValue,primaryStatus:{value:e.value,label:e.value}})
        setOptions({...options,subStatusOne:getSubStatusOne(optionValue.primaryStatus)})
       
    }
   
    return (
    <div>
        PrimaryStatus
        <Select
        value={optionValue.primaryStatus}
        onChange={handleChange}
        options={options.primaryOptions}
        />
        PrimaryStatus
        <Select
       value={optionValue.subStatusOne}
        onChange={handleChange}
        options={options.subStatusOne}
        />
    </div>
    )
}

export default DynamicDropdown;