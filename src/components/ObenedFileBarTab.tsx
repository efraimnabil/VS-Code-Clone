import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./FileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile } from "../app/features/FileTreeSlice";

interface IProps {
    file: IFile;
}

const ObenedFileBarTab = ({file}: IProps) => {
  const dispatch = useDispatch()

  const onclick = () => {
    dispatch(setClickedFile({
      filename: file.name,
      fileContent: file.content
    }))
  }
  return (
    <div className="flex items-center p-2" onClick={onclick}>
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