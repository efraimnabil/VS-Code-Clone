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
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        activeFile: null,
        filename: "",
        fileContent: "",
    }
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
    }
})

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions

export default fileTreeSlice.reducer