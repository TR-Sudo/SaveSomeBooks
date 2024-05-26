import '../styles/navbar.css';
import '../styles/index.css'
import { useState } from 'react';

export default function Books(){

    const [search,setSearch]=useState("");
    const [bookfound,SetBookFound]=useState(false);

    var [titlefound,SetTitleFound]=useState("To kill a mockingbird"); // saves title found
    var [authorfound,SetAuthorFound]=useState("Harper Lee"); // saves author found
    var [datepublished,SetDatePublished]=useState("Apr 26, 2005"); // saves date published
    var [isbn,SetISBN]=useState("0434413003") // used to find retrieve image,default is to kill a mockingbird

    var [subject,SetSubject]= useState("Married people, fiction', 'American fiction (fictional works by one author)', 'Fiction, psychological', 'Long island (n.y.), fiction', 'Fiction', 'Rich people'")

    const subMitForm=async(e)=>{
        e.preventDefault();

        var str= search;
        var replace = str.replace(' ', '+');// query requires + symbols instead of [spaces]
        
        const http=`https://openlibrary.org/search.json?title=${replace}` // API endpoint for https://openlibrary.org/dev/docs/api/search

        try {
            const response = await fetch(http).then(response => response.json()).then(data => {                
               // Stores key data found from request, to be stored into mongodb if user favorites
               SetAuthorFound(data['docs'][0]['author_name'][0]);
               SetTitleFound(data['docs'][0]['title_suggest']);
               SetDatePublished(data['docs'][0]['publish_date'][0]);
               SetBookFound(true);
               SetISBN(data['docs'][0]['isbn'][0])
               console.log(data['docs'][0])

            })
        } catch (error) {
            alert("Failed to search query with:\t"+error)
        }


    }

    
    return(
        <div className='mainbody'>
            <a style={{textAlign:"center",padding:"10px",margin:'10px',backgroundColor:'whitesmoke'}}>Search for any book by name to display, <br></br>Press + symbol to add to favorites</a>
            <form onSubmit={subMitForm}>
                <h2 style={{color:'white'}}>Search For Any Book</h2>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='To Kill A Mockingbird'/>
                <button type='submit' className='Submit_Button'>Submit</button>
            </form>
            <div className='Main'>
                <h3>Author: {authorfound}</h3>
                <img src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`} alt='Cover Image, Rate limited cover might not appear' />
                <h3>Subject: {subject}</h3>
                <h3>Published date: {datepublished}</h3>
            </div>      
            
        </div>
    )
}