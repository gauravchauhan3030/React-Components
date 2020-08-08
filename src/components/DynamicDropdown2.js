import React, { useEffect, useState } from 'react';
import Select from 'react-select'

const DynamicDropdown2=()=>{

    const [updateDropdown,setUpdateDropdown]=useState({
        countries : [],
        states : [],
        cities : [],
        selectedCountry : '',
        selectedState : '',
        selectedCity:''
    });
    useEffect(()=>{
setUpdateDropdown({
    countries : [
        { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
        { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
        { name: 'USA', states:[] },
        { name: 'Mexico', states: [ {name: 'Mexico State', cities: [{name:'Puebla'}]},{name: 'Mexico State2', cities: ['Puebla']} ] },
        { name: 'India', states: [ {name: 'India State', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
    ],
    states : [],
    cities : [],
    selectedCountry:'',
    selectedState:'', //{value:proper.state,label:proper.state},
    selectedCity:'',//{value:proper.city,label:proper.city}
})
    },[])
    const handleChangeCountry=(e)=>{
        setUpdateDropdown({...updateDropdown,selectedCountry:{label:e.value,value:e.value},states:updateDropdown.countries.find(cntry=>{
            return cntry.name===e.value}).states,selectedState:'',selectedCity:''
        });
        // setUpdateDropdown({...updateDropdown,states:updateDropdown.countries.find(cntry=>{
        //     return cntry.name===e.value}).states
        // })
        //this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }
    const handleChangeState=(e)=>{
        console.log(updateDropdown.selectedCountry)
        const stats = updateDropdown.countries.find(cntry => cntry.name === updateDropdown.selectedCountry.label).states;
        setUpdateDropdown({...updateDropdown,selectedState:{label:e.value,value:e.value},
            cities:stats.find(stat=>{
            return stat.name===e.value}).cities,
            selectedCity:''
        });
        console.log(updateDropdown)
    }
    const handleChangeCity=(e)=>{
        setUpdateDropdown({...updateDropdown,selectedCity:{label:e.value,value:e.value}})
    }
    return (
        <div>
            select Country
            <Select 
            value={updateDropdown.selectedCountry}
            options={updateDropdown.countries.map(e=>{
                return {label:e.name,value:e.name}
            })}
            onChange={handleChangeCountry}
            />
            select State
            <Select 
            value={updateDropdown.selectedState}
            options={updateDropdown.states.map(e=>{
                return {label:e.name,value:e.name}
            })}
            onChange={handleChangeState}
            />
            select city
            <Select 
            value={updateDropdown.selectedCity}
            options={updateDropdown.cities.map(e=>{
                return {label:e.name,value:e.name}
            })}
            onChange={handleChangeCity}
            />
        </div>
    )
}

export default DynamicDropdown2;