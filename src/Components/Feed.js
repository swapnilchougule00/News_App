import React, { useEffect, useState } from "react";
import "./Feed.css";
import "../index.css";
import Loding from "./Loding";
import { useNavigate } from "react-router-dom";


function Feed({show}) {
  const [news, setNews] = useState([]);

  const [grid , setGrid]= useState('card')

  const[loding , setLoding] = useState(true)


  const changeToCard = ()=>{
    setGrid('card')
  }

  const changeToList = ()=>{
    setGrid('')
  }

  const navigate = useNavigate()

  const gotoContact=()=>{
      navigate('/Contact')
  }

  const url = 'https://gnews.io/api/v4/search?q=example&token=b92623d90c22a6c3c0420a01c2a37600&lang=en'


    const FetchNews = async () => {
      setLoding(true)
      try{
        const response = await fetch(url);
        const data = await response.json();
      console.log(data.articles);
      setLoding(false)
        setNews(data.articles);
      }
      catch (error) {
        setLoding(false)
          console.log(error)
      }
      
    };

  useEffect(() => {
    FetchNews();
  }, []);

  const remove = (publishedAt) => {
    const newNewsArray = news.filter((value) =>value.publishedAt !== publishedAt )
      setNews(newNewsArray)
  };


  if(loding){
return(
  <Loding/>
)
  }

  return (<div className="body">

    {
      grid?(
        <div className={`${show? 'dark': 'light'} feed`}>
      <div className="view">
        <button onClick={()=>gotoContact()}>Contact Us</button>
        <button className="change-to" onClick={()=>changeToCard()} >card</button>
        <button className="change-to" onClick={()=>changeToList()}>list</button>

      </div>
      
        {
          news?.map((value,i)=>{
            const { image, title, url, content, publishedAt } =
            value;
           
          return(
     
            <div className="main" key={i}>
              <div className='card'>
                <img className='img' src={image}  alt={title.slice(0 ,15)} />
                <div className="info">
                  <div className="title">{title.slice(0 , 30)}</div>
                  <p className="content">{content.slice(0,400)}</p>
                  <button className="btn-more">
                    <a className="readMore" href={url} target='main'>Read more</a>
                  </button>
                  <button onClick={() => remove(publishedAt)} className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
   text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Not Intrested</button>
                </div>
              </div>
            </div>)})
        }
      </div>
      ):
      (
        <div className= {`${show? 'dark': 'light'} feed-list`} >
      <div className="view">
      <button onClick={()=>gotoContact()}>Contact Us</button>
        <button className="change-to" onClick={()=>changeToCard()} >card</button>
        <button className="change-to" onClick={()=>changeToList()}>list</button>
      </div>
      
        {
          news?.map((value,i)=>{
            const { image, title, url, content, publishedAt } =
            value;
           
          return(
     
            <div className="main" key={i}>
              <div className= 'card-list'>
                <img className='img-list' src={image} alt={title.slice(0 ,15)}/>
                <div className="info">
                  <div className="title">{title.slice(0 , 30)}</div>
                  <p className="content">{content.slice(0,400)}</p>
                  <button className="btn-more">
                    <a className="readMore-list" href={url} target='main'>Read more</a>
                  </button>
                  <button onClick={() => remove(publishedAt)} className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
   text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Not Intrested</button>
                </div>
              </div>
            </div>)})
        }
      </div>
      )
    }
  </div>
 
  )

  }
export default Feed;
