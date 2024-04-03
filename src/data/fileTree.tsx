import { IFile } from "../interfaces";

export const fileTree: IFile = {
    name: "Folder1",
    isFolder: true,
    children: [
        {
            name: "folder1",
            isFolder: true,
        },
        {
            name: "folder2",
            isFolder: true,
        },
        {
            name: "file1",
            isFolder: false,
            content: "This is file1"
        },
    ]
}