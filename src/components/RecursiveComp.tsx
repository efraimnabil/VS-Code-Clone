import { IFile } from "../interfaces";
import FileIcon from "./SVG/File"
import FolderIcon from "./SVG/Folder";

interface IProps {
    fileTree: IFile;
}

const RecursiveComp = ({fileTree: {name, isFolder, children}}: IProps) => {

  return (
    <div className="mb-2 ml-2 cursor-pointer">
    <div className="flex items-center mb-1">
        <span className="mr-2">
            {isFolder ? <FolderIcon /> : <FileIcon />}
        </span>
        <span>
            {name}
        </span>
    </div>

        {
          children && children.map((child, index) => {
            return (
              <div key={index}>
                <RecursiveComp fileTree={child} />
              </div>
            )
          })
        }

        
    </div>
  )
}

export default RecursiveComp