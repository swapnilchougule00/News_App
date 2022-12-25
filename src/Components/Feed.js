import React, { useEffect, useState } from "react";
import "./Feed.css";
import "../index.css";
import Loding from "./Loding";
import { BsMoonStars } from "react-icons/bs";
import { MdViewList } from "react-icons/bs";


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


  const url =
    "https://newsapi.org/v2/everything?q=apple&from=2022-12-21&to=2022-12-21&sortBy=popularity&apiKey=2c8fb0a3f0f84e1f8d937471d7ba6328";


    const FetchNews = async () => {
      setLoding(true)
      try{
        const response = await fetch(url);
        const data = await response.json();
      // console.log(data.articles);
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
        <button onClick={()=>changeToCard()} >card</button>
        <button onClick={()=>changeToList()}>list</button>
      </div>
      
        {
          news.map((value,i)=>{
            const { urlToImage, title, url, content, publishedAt } =
            value;
           
          return(
     
            <div className="main" key={i}>
              <div className='card'>
                <img className='img' src={urlToImage} />
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
        <button onClick={()=>changeToCard()} >card</button>
        <button onClick={()=>changeToList()}>list</button>
      </div>
      
        {
          news.map((value,i)=>{
            const { urlToImage, title, url, content, publishedAt } =
            value;
           
          return(
     
            <div className="main" key={i}>
              <div className= 'card-list'>
                <img className='img-list' src={urlToImage} />
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
      )
    }
  </div>
 
  )

  }
export default Feed;
