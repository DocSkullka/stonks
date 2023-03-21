import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    data: [],
    symbol: '',
    inputRefState: '',
    promptFlag: false,
    popupFlag: false,
    rows: []
}

export const stockSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setSymbol: (state, action) => {
            state.symbol = action.payload
        },
        setInputRefState: (state, action) => {
            state.inputRefState = action.payload
        },
        setPromptFlag: (state, action) => {
            state.promptFlag = action.payload
        },
        setPopupFlag: (state, action) => {
            state.popupFlag = action.payload
        },
        setRows: (state, action) => {
            state.rows = action.payload
        }
    }
})

export const {setCount, setData, setSymbol, setInputRefState, setPromptFlag, setPopupFlag, setRows} = stockSlice.actions
export default stockSlice.reducer