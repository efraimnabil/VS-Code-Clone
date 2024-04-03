import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
    filename: string;
    isFolder?: boolean;
    isOpen?: boolean;
}

const extensionIconPaths: Record<string, string> = {
    tsx: "/icons/react_ts",
    jsx: "/icons/react",
    json: "/icons/json",
    html: "/icons/html",
    css: "/icons/css",
    js: "/icons/javascript",
    ts: "/icons/typescript",
    png: "/icons/image",
    jpg: "/icons/image",
    gif: "/icons/image",
    node_modules: "/icons/folder-node",
    public: "/icons/folder-public",
    src: "/icons/folder-src",
    folder: "/icons/folder-default",
    ico: "/icons/favicon",
}

const RenderFileIcon = ({filename, isFolder, isOpen}: IProps) => {
    const extension = filename.split(".").pop();

    if (extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)) {
      const iconPath = isFolder
        ? isOpen
          ? `${extensionIconPaths[extension]}-open.svg`
          : `${extensionIconPaths[extension]}.svg`
        : `${extensionIconPaths[extension]}.svg`;
  
      return <IconImg src={iconPath} />;
    }
  
    if (isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg" />;
    if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  
    return <FileIcon />;
}

export default RenderFileIcon;