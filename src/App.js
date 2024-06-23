import './App.css';
import React,{useEffect} from 'react';
import { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';

const quotes = [
  {author:"- Rosa Parks",quote:"I have learned over the years that when one’s mind is made up, this diminishes fear.",color:"red"},
  {author:"- Norman Vincent Peale",quote:"Change your thoughts and you change your world.",color:"yellow"},
  {author:"- Leonardo da Vinci",quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",color:"green"},
  {author:"- Abraham Lincoln",quote:"It’s not the years in your life that count. It’s the life in your years.",color:"blue"},
  {author:"- Roger Staubach",quote:"There are no traffic jams along the extra mile.",color:"magenta"},
  {author:"- Albert Einstein",quote:"A person who never made a mistake never tried anything new.",color:"grey"}]

var i = 0;
function App() {
  const arr = [...quotes];
  arr.shift();
  const j = Math.floor(Math.random()*arr.length)
  const [author, setAuthor] = useState(arr[j].author);
  const [quote, setQuote] = useState(arr[j].quote);
  const [color, setColor] = useState(arr[j].color);

  function newQoute() {
    if(i==quotes.length) i=0
    setAuthor(quotes[i].author)
    setQuote(quotes[i].quote)
    setColor(quotes[i].color)
    i++;
  }
  
    return(
      <div id='quote-box'>
        <Quote author={author} quote={quote} color={color}/>
        <NewQuote newQoute={newQoute} color={color}/>
      </div>
    );
  
}

function Quote({quote,author,color}){
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
    return (
      <div id='quote-container'>
        <p id='text' style={{color:color}}>{quote}</p>
        <p id='author' style={{color:color}}>{author}</p> 
      </div>
    );
  
}

function NewQuote({newQoute,color}){
    return (
      <div id='new'>
        <a  id='tweet-quote' href='twitter.com/intent/tweet' target="_blank"><FaTwitter id='twitter-icon' size={55} color={color} /></a>
        <button id='new-quote' onClick={newQoute} style={{backgroundColor:color}}>New Quote</button>
      </div>
    );
  
}

export default App;
