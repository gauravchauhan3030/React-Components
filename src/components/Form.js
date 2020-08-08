import React,{useState} from 'react';

const Form=()=>{
    const [user,setUser]=useState({
        firstName:'',
        lastName:'',
        favouriteFruit:'coconut',
        isGoing:true
    });
    //const [lastName,setLastName]=useState('')

    const handleChange=(e)=>{
        if(e.target.type==="checkbox"){
           setUser({
               ...user,
               [e.target.name]:!user.isGoing
           })
        } else{
       setUser({
           ...user,
           [e.target.name]:e.target.value
       })}
    }
    const handleChange2=(e)=>{
        setUser({
            ...user,
            favouriteFruit:e.target.value
        })
     }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }
    return (
    <div className="ui container">
        <form className="ui form" onSubmit={handleSubmit} >
            <div className="field">
                <label>First Name</label>
                <input type="text" onChange={handleChange} name="firstName" value={user.firstName} placeholder="First Name"/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" onChange={handleChange} value={user.lastName} name="lastName" placeholder="Last Name"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input
                    type="checkbox" name="isGoing"
                    onChange={handleChange}
                    checked={user.isGoing}
                className="hidden"/>
                <label>I will go</label>
                </div>
            </div> 
            <div className="field">
                
                <label>I agree to the Terms and Conditions</label>
                <select value={user.favouriteFruit} id="fovouriteFruit" onChange={handleChange2}>
                    <option  value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option  value="coconut">Coconut</option>
                    <option  value="apple">Apple</option>
                </select>
            </div> 
            
            <button className="ui button" type="submit">Submit</button>
        </form>
   </div>
    )
}

export default Form;