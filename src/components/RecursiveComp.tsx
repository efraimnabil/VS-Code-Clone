import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/rArrow";
import BottomArrowIcon from "./SVG/bArrow";
import RenderFileIcon from "./FileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClickedFile, setOpenedFiles } from "../app/features/FileTreeSlice";
import { doesFileObjExist } from "../utils/functions";

interface IProps {
    fileTree: IFile;
}

const RecursiveComp = ({fileTree}: IProps) => {
  const {name, isFolder, children, id, content} = fileTree
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {openedFiles} = useSelector((state: RootState) => state.tree)
  const toggle = () => setIsOpen(prev => !prev)

  const onFileClick = () => {
    const exist = doesFileObjExist(openedFiles, id)
    dispatch(setClickedFile({
      filename: name,
      fileContent: content,
      activeFile: id
    }))
    if (exist) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]))
  }
  return (
    <div className="mb-2 ml-3 cursor-pointer">
    <div className="flex items-center mb-1">
            {isFolder ? 
              <div className="flex items-center" onClick={toggle}>
                {isOpen ? 
                  <BottomArrowIcon /> 
                  : 
                  <RightArrowIcon />
                }
                <RenderFileIcon filename={name} isFolder isOpen={isOpen}/>
                <span className="select-none">
                    {name}
                </span>
              </div>
              : 
              <span className="flex items-center" onClick={onFileClick}>
                <RenderFileIcon filename={name} />
                <span className="select-none">
                    {name}
                </span>
              </span>
              
          }

    </div>

        {isOpen &&
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