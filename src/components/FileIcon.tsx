import IconImg from "./IconImg";

interface IProps {
    filename: string;
    isFolder?: boolean;
    isOpen?: boolean;
}

const FileIcon = ({filename, isFolder, isOpen}: IProps) => {
    const extention = filename.split('.').pop()

    // files
    if (extention === '.tsx') return <IconImg src="/icons/react_ts.svg" />
    if (extention === '.jsx') return <IconImg src="/icons/react.svg" />
    if (extention === '.json') return <IconImg src="/icons/json.svg" />
    if (extention === '.html') return <IconImg src="/icons/html.svg" />
    

    // folders
    if(extention === "node_modules" && isFolder)
        return isOpen ? <IconImg src="/icons/folder-node_open.svg" /> : <IconImg src="/icons/folder-node.svg" />
    if(extention === "public" && isFolder)
        return isOpen ? <IconImg src="/icons/folder-public_open.svg" /> : <IconImg src="/icons/folder-public.svg" />
    if(extention === "src" && isFolder)
        return isOpen ? <IconImg src="/icons/folder-src_open.svg" /> : <IconImg src="/icons/folder-src.svg" />

    if(isFolder) return isOpen ? <IconImg src="/icons/folder-default-open.svg" /> : <IconImg src="/icons/folder-default.svg" />

}

export default FileIcon