import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import ObenedFileBarTab from "./ObenedFileBarTab"
import SyntaxHighlighter from "./SyntaxHighlighter"

interface IProps {

}

const OpenedFilesBar = ({}: IProps) => {
    const {openedFiles, clickedFile} = useSelector((state: RootState) => state.tree)
  return (
    <div>
      <div className="flex items-center border-b border-gray-200">
              {openedFiles.map((file) => {
              return (
                  <ObenedFileBarTab key={file.id} file={file} />
                  )
              })}
      </div>
      <SyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  )
}

export default OpenedFilesBar