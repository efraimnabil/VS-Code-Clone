import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import ObenedFileBarTab from "./ObenedFileBarTab"
import { useState } from "react"
import DropMenu from "./DropMenu"

interface IProps {

}

const OpenedFilesBar = ({}: IProps) => {
  const [menuPosition, setMenuPosition] = useState({x: 0, y: 0})
  const [menuOpen, setMenuOpen] = useState(false)
    const {openedFiles} = useSelector((state: RootState) => state.tree)
  return (
    <div>
      <div className="flex items-center border-b border-gray-200"
            onContextMenu={(e) => 
              {
                e.preventDefault()
                setMenuPosition({x: e.clientX, y: e.clientY})
                setMenuOpen(!menuOpen)
              }
            }>
              {openedFiles.map((file) => {
              return (
                  <ObenedFileBarTab key={file.id} file={file} />
                  )
              })}
      </div>
      {menuOpen && <DropMenu positions={menuPosition} setMenuOpen={setMenuOpen} />}

    </div>
  )
}

export default OpenedFilesBar