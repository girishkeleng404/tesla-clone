import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["model 3", "model Y", "model S", "model X"]
}

const carSlice = createSlice({ 
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer