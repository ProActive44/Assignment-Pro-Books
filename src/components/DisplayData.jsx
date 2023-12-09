import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import './DisplayData.css'

const DisplayData = () => {

    const [data, setData] = useState([])

  useEffect(() => {
    const getData = async()=>{
        try {
           let res =  await axios.get("https://reactnd-books-api.udacity.com/books", {
                headers: { Authorization: "whatever-you-want" },
            });
            console.log(res.data)
            setData(res.data.books)   
        } catch (error) {
           console.log(error)
        }
    }
    getData()
  }, []);
  return <div>
    {
        data.map((book, idx)=>{
            return <div key={idx} className="bookContainer">
                <h2>{book.title}</h2>
                <div className="middleContainer flex">
                    <img src={book.imageLinks.thumbnail} alt="" />
                    <h5>{book.description}</h5>
                </div>
                <div className="flex">
                    <h3>Author : </h3> 
                    {
                        book.authors.map((author, idx)=>{
                            return <h3 key={idx}>{author}</h3>
                        })
                    }
                </div>
                </div>
        })
    }
  </div>;
};

export default DisplayData;
