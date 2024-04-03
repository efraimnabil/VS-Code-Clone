import { IFile } from "../interfaces";
import FileIcon from "./SVG/File"

interface IProps {
    fileTree: IFile;
}

const RecursiveComp = ({fileTree}: IProps) => {
  return (
    <div className="mb-2 ml-2 cursor-pointer">
    <div className="flex items-center mb-1">
        <span className="mr-2">
            <FileIcon />
        </span>
        <span>
            {fileTree.name}
        </span>
    </div>

        {
          fileTree.children && fileTree.children.map((child, index) => {
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