import React from 'react';
import "../app.css" ;
import "./about.css" ;

export function About() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');


  React.useEffect(() => {

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);



  return (
    <main className="container-fluid text-center">
      <div>Have you ever wondered how to cook local cuisine while traveling in a foreign country,
         where to find the ingredients in that country, or how a dish is traditionally prepared in the native town of someone
          important—like your boss—who’s coming over to your house? Or perhaps you’re curious about recreating a dish in the specific
           style of a region from halfway across the globe? 
           <p>The <em>Eat&Travel</em> website brings the world of global cooking to your fingertips.
         It offers access to millions of recipes and step-by-step instructions for the most popular dishes from around the world.
         </p>
        </div>
      
        
        <p className='quote'>{quote}</p>
        <p className='author'>{quoteAuthor}</p>
    </main>
  );
}
