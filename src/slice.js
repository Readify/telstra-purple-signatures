import {createSlice} from '@reduxjs/toolkit'
import constants from './constants'

const initialState = {
    profile: Object
        .entries(constants.placeholders)
        .reduce((result, item) => Object.assign(result, { [item[0]]: item[1] === false ? false : ''}), {})
};

export const signatureSlice = createSlice({
    name: 'Signature',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile[action.payload.name] = action.payload.value
        }
    }
})

export const {updateProfile} = signatureSlice.actions;

export default signatureSlice.reducer;