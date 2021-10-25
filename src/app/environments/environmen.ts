 const environment = {
    production: false,
    BASE_URL: "https://api.themoviedb.org/3/",
    IMG_URL: "https://image.tmdb.org/t/p/w500",
    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGY4MDViZDZhMDY1ZjE2MDFlMWZjYWM4NmFhNjYwYyIsInN1YiI6IjYxMDA1ZjA0YTg0YTQ3MDA1ZjFjNzNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6gvTkVfgZyHCeUGIyGuqs953dbfimWr1NNPNElw4F4"
              
  };
  
  const SEARCH_BASE_URL = `${environment.BASE_URL}search/movie&language=en-US&query=`;


  const POPULAR_BASE_URL = `${environment.BASE_URL}movie/popular&language=en-US&page=$`;


  export{
      environment,
      SEARCH_BASE_URL,
      POPULAR_BASE_URL
  }