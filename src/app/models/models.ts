export interface IMovie {
    id: string;
    vote_average: number;
    title: string;
    release_date: string,
    poster_path:string,
    backdrop_path:string
    overview:string,
    genres: List[]
}

interface List {
    id:string,
    name:string
}

export interface APIResponse<T>{
    page:number;
    results: T[];
    total_pages:number;
    total_results:number
}