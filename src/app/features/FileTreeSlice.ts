import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
    filename: string;
    fileContent: string | undefined;
    activeFile: string | null;
}

interface IInitialState {
    openedFiles: IFile[];
    clickedFile: IClickedFile;
    tapIdToRemove: string | null;
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        activeFile: null,
        filename: "",
        fileContent: "",
    },
    tapIdToRemove: null
}

export const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => { 
            state.openedFiles = action.payload
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload
        },
        setTapIdToRemove: (state, action: PayloadAction<string>) => {
            state.tapIdToRemove = action.payload
        }
    }
})

export const { setOpenedFiles, setClickedFile, setTapIdToRemove } = fileTreeSlice.actions

export default fileTreeSlice.reducer