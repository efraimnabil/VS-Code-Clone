import { IFile } from "../interfaces";
import RenderFileIcon from "./FileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
    file: IFile;
}

const ObenedFileBarTab = ({file}: IProps) => {
  return (
    <div className="flex items-center p-2">
        <RenderFileIcon filename={file.name} />
        <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
            {file.name}
        </span>
        <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
           <CloseIcon />
        </span>
    </div>
  )
}

export default ObenedFileBarTab