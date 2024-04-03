import { IFile } from "../interfaces";

export const fileTree: IFile = {
    name: "my-app",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false,
                    content: "<!-- This is the HTML file -->"
                },
                {
                    name: "favicon.ico",
                    isFolder: false,
                    content: "<!-- This is the favicon -->"
                },
            ]
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "App.tsx",
                    isFolder: false,
                    content: "import React from 'react'; /* This is the main App component */"
                },
                {
                    name: "index.tsx",
                    isFolder: false,
                    content: "import React from 'react'; import ReactDOM from 'react-dom'; /* This is the entry point of the app */"
                },
            ]
        },
        {
            name: "package.json",
            isFolder: false,
            content: "{ /* This is the package.json file */ }"
        },
        {
            name: "tsconfig.json",
            isFolder: false,
            content: "{ /* This is the tsconfig.json file */ }"
        },
    ]
}