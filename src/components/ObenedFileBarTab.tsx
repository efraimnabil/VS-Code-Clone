import { IFile } from "../interfaces";
import RenderFileIcon from "./FileIcon";

interface IProps {
    file: IFile;
}

const ObenedFileBarTab = ({file}: IProps) => {
  return (
    <div>
        <span>
            <RenderFileIcon filename={file.name} />
        </span>
        <li>
            {file.name}
        </li>
    </div>
  )
}

export default ObenedFileBarTab