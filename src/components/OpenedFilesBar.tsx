import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import ObenedFileBarTab from "./ObenedFileBarTab"

interface IProps {

}

const OpenedFilesBar = ({}: IProps) => {
    const {openedFiles} = useSelector((state: RootState) => state.tree)
  return (
    <div className="flex items-center">
        <ul>
            {openedFiles.map((file) => {
            return (
                <ObenedFileBarTab key={file.id} file={file} />
                )
            })}
        </ul>
    </div>
  )
}

export default OpenedFilesBar