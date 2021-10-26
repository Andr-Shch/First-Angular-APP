 const environment = {
    production: false,
    BASE_URL: "https://api.themoviedb.org/3/",
    API_KEY4: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGY4MDViZDZhMDY1ZjE2MDFlMWZjYWM4NmFhNjYwYyIsInN1YiI6IjYxMDA1ZjA0YTg0YTQ3MDA1ZjFjNzNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6gvTkVfgZyHCeUGIyGuqs953dbfimWr1NNPNElw4F4",
    API_KEY3: "b8f805bd6a065f1601e1fcac86aa660c"   ,
    IMG_URL_POSTER: "https://image.tmdb.org/t/p/w500",
    IMG_URL_BACKDROP: "https://image.tmdb.org/t/p/w1280"
  };
  
  const SEARCH_BASE_URL = `${environment.BASE_URL}search/movie&language=en-US&query=`;


  const POPULAR_BASE_URL =`${environment.BASE_URL}movie/popular?api_key=${environment.API_KEY3}&language=en-US`
  const SORT_URL = `${environment.BASE_URL}discover/movie?api_key=${environment.API_KEY3}&language=en-US&sort_by=`//      revenue.desc&page=`
  
  export{
      environment,
      SEARCH_BASE_URL,
      POPULAR_BASE_URL,
      SORT_URL
   }