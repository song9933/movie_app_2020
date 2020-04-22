import React from 'react';

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodIlike=[
  { 
    name : "macaron" ,
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120827_34%2Fbumgoo02_1346056898172fdOOE_JPEG%2Ftumblr_m8fxlefy6G1qzipvbo1_500_large.jpg&type=b400"
  },
  { 
    name : "coffee" ,
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141008_98%2Fclean7793_1412746298639itoiH_GIF%2F2.gif&type=b400"
  },
  { 
    name : "croffle",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMDhfNzUg%2FMDAxNTc4NDkwNDcwODk2.dSKZahdbCVju6CiswYC6mci7OIdcp6sxt34v6BHEBLcg.nlTR4LYKNLeyMFMqZD1L6oGcc4tTu0-JuP4fzc212CIg.JPEG.catousa%2F%25BE%25C6%25BF%25EC%25C7%25C1%25B1%25DB%25B7%25BF_%25283%2529.jpg&type=b400"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodIlike.map(dish =>(
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
