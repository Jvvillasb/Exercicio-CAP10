export type MoviesResponse ={
    content: Movie[];
    totalPages: number;
}
export type Genre={
    id:number;
    name:string;
}

export type User={
    id:number;
    name:string;
    email:string;
}

export type Review ={
    id:number;
    text:string;
    user: User;
}

export type Movie = {
    id:number;
    title:string;
    subTitle: string;
    year:number;
    imgUrl: string;
    
    synopsis:string;
    date:string;
    reviews: Review[];
}


