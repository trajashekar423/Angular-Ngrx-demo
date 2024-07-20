import { createReducer } from '@ngrx/store';


export interface Homepage {
    id:string
    Home:string; 
    About:string;
    Heading:string;
    Readmore:string;
    shopnowbtn:string
    
};

const initialState: Homepage[] =[
    {   "id":"1",
        "Home": "Get your healthy foods & snacks delivered at your doorsteps all day everyday",
        "About": "Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean. Immature or young pods of the runner bean, yardlo..",
        Heading:"Groceries Delivered in 90 Minute",
        Readmore:"Readmore",
        shopnowbtn: "Shop now"
        
      }
      
];

export const homepageReducer = createReducer(
    initialState,
  
);