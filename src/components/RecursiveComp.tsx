import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/rArrow";
import BottomArrowIcon from "./SVG/bArrow";
import RenderFileIcon from "./FileIcon";

interface IProps {
    fileTree: IFile;
}

const RecursiveComp = ({fileTree: {name, isFolder, children}}: IProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(prev => !prev)
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
              <span className="flex items-center">
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