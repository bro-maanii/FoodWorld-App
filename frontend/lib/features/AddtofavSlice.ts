import { createSlice, current} from '@reduxjs/toolkit'


// Define a type for the slice state
export interface IFavorite {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
}
const isServer = typeof window === 'undefined';
// Define the initial state using that type
const initialState: IFavorite[] = isServer
? []: JSON.parse(localStorage.getItem('favoritee') || '[]');

export const AddtofavSlice = createSlice({
  name: 'favoritee',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addfav (state, action){
        const data={
            idMeal: action.payload.idMeal,
            strMeal: action.payload.strMeal,
            strMealThumb: action.payload.strMealThumb,
        }
        state.push(data)
        if (!isServer) {
            let listData = JSON.stringify(current(state));
            localStorage.setItem('favoritee', listData);
        }
    },
    removefav(state, action){
        const index= state.findIndex((item)=> item.idMeal === action.payload.idMeal)
        if (index !== -1) {
            state.splice(index, 1);
            if (!isServer) {
              let listData = JSON.stringify(current(state));
              localStorage.setItem('favoritee', listData);
            }
    }
  },
}})

export const { addfav, removefav } = AddtofavSlice.actions
export default AddtofavSlice.reducer