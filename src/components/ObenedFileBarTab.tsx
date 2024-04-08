import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./FileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles } from "../app/features/FileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
    file: IFile;
}

const ObenedFileBarTab = ({file}: IProps) => {

  const dispatch = useDispatch()
  const {clickedFile, openedFiles} = useSelector((state: RootState) => state.tree)

  const onclick = () => {
    dispatch(setClickedFile({
      filename: file.name,
      fileContent: file.content,
      activeFile: file.id
    }))
  }

  const onRemove = (id: string) => {
    const newFiles = openedFiles.filter((file) => file.id !== id)
    const lastFile = newFiles[newFiles.length - 1]
    if(!lastFile){
      dispatch(setOpenedFiles([]))
      dispatch(setClickedFile({
        filename: "",
        fileContent: "",
        activeFile: null
      }))
      return
    } 
    dispatch(setClickedFile({
      filename: lastFile.name,
      fileContent: lastFile.content,
      activeFile: lastFile.id
    }))
    dispatch(setOpenedFiles(newFiles))
  }
  return (
    <div 
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        file.id === clickedFile.activeFile ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onclick} 

    > 
        <RenderFileIcon filename={file.name} />
        <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
            {file.name}
        </span>
        <span 
          className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
          onClick={(e) => {
            e.stopPropagation()
            onRemove(file.id)}
          }
        >
           <CloseIcon />
        </span>

    </div>
  )
}

export default ObenedFileBarTab