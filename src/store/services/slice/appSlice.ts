import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const intialState: IState = {
    darkMode: false,
    select:'',
    contries: []
}

const appSlice = createSlice({
    name: "app",
    initialState: intialState,
    reducers: {
        setDarkMode: (state: IState, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
        setSelect: (state: IState, action: PayloadAction<string>) => {
            state.select = action.payload;
        },
        setContries: (state: IState, action: PayloadAction<ICountry[]>) => {
            state.contries = action.payload;
        }
  
    }
})

export const { setDarkMode, setSelect ,setContries} = appSlice.actions;
export default appSlice.reducer;