import { createReducer } from '@ngrx/store';


export interface State {
     id:number;
    userId:number
    title:string;
    body:string; 
};

const initialState: State[] = 
    [
        {
            "userId": 1,
            "id": 1,
            "title": "Groceries Delivered in 90 Minute",
            "body": "Get your healthy foods & snacks delivered at your doorsteps all day everyday"
          }
    ];

export const stateReducer = createReducer(
    initialState,
  
);

