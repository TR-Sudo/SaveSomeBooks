import '../styles/navbar.css';
import '../styles/index.css'
import { useState } from 'react';

export default function Books(){

    const [search,setSearch]=useState("");

    var [titlefound,SetTitleFound]=useState(""); // saves title found
    var [authorfound,SetAuthorFound]=useState(""); // saves author found
    var [datepublished,SetDatePublished]=useState(""); // saves date published

    const subMitForm=async(e)=>{
        e.preventDefault();

        var str= search;
        var replace = str.replace(' ', '+');// query requires + symbols instead of [spaces]
        
        const http=`https://openlibrary.org/search.json?title=${replace}` // API endpoint for https://openlibrary.org/dev/docs/api/search

        try {
            const response = await fetch(http).then(response => response.json()).then(data => {                
               // Stores key data found
               SetAuthorFound(data['docs'][0]['author_name'][0]);
               SetTitleFound(data['docs'][0]['title_suggest']);
               SetDatePublished(data['docs'][0]['publish_date'][0]);
            })
        } catch (error) {
            alert("Failed to search query with:\t"+error)
        }
    }

    
    return(
        <div className='mainbody'>
            <a style={{textAlign:"center",padding:"10px"}}>Search for any book by name to display, <br></br>Press + symbol to save to favorites</a>
            <form onSubmit={subMitForm}>
                <h2 style={{color:'white'}}>Search For Any Book</h2>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='To Kill A Mockingbird'/>
                <button type='submit' className='Submit_Button'>Submit</button>
            </form>
        </div>
    )
}