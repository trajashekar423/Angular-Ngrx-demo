import { createReducer } from '@ngrx/store';


export interface Mybannercontent {
     
    Home:string; 
    id:string;  
    Heading:string
};

const initialState: Mybannercontent[] =[
    {   
        "id":"1",
        "Heading":"Welcome to Bootstrap",
        "Home": "Porto is simply a better choice for your new website design. The template is several years among the most popular in the world, being constantly improved and following the trends of design and best practices of code. Your search for the best solution is over, get your own copy and join tens of thousands of happy customers.",
    
        
      }
      
];



export const mybanneReducer = createReducer(
    initialState,   
);