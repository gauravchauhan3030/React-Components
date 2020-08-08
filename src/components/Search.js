import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search=()=>{
  
    const [term,setTerm]=useState('programing');
    const [debounce,setDebounce]=useState(term);
    const [result,setResult]=useState([]);

    useEffect(()=>{
        const timerId=setTimeout(()=>{
           setDebounce(term)
        },1000)
        return ()=>{
            clearTimeout(timerId);
        }
    },[term])

    useEffect(()=>{
        const search= async ()=>{
           const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debounce
                }
            })
          setResult(data.query.search)
        }
        search();
       
    },[debounce])

    return (
        <>
        <div class="ui search">
            <div class="ui icon input">
                <input class="prompt" 
                    type="text" 
                    placeholder="Common passwords..." 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)} />
                <i class="search icon"></i>
            </div>
        </div>
         {result.map(r=>{
            return <div key={r.pageid} class="header">
                <div>{r.title}</div>
         <p className="content" dangerouslySetInnerHTML={{__html:r.snippet}}></p>
                </div>
        })}
        </>
    )
}

export default Search;