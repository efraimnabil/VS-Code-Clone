import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenedFiles } from "../app/features/FileTreeSlice"
import { RootState } from "../app/store"

interface IProps {
    setMenuOpen: (arg: boolean) => void
    positions: {
        x: number
        y: number
    }
}

const ContextMenu = ({positions, setMenuOpen}: IProps) => {
    const {x, y} = positions
    const menuRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const {openedFiles, tapIdToRemove} = useSelector((state: RootState) => state.tree)

    const onClose = () => {
        setMenuOpen(false)
        const newFiles = openedFiles.filter((file) => file.id !== tapIdToRemove)
        dispatch(setOpenedFiles(newFiles))
    }

    const onCloseOthers = () => {
        setMenuOpen(false)
        const newFiles = openedFiles.filter((file) => file.id === tapIdToRemove)
        dispatch(setOpenedFiles(newFiles))
    }

    const onCloseAll = () => {
        setMenuOpen(false)
        dispatch(setOpenedFiles([]))
    }

    const onClosetoRight = () => {
        setMenuOpen(false)
        const index = openedFiles.findIndex((file) => file.id === tapIdToRemove)
        const newFiles = openedFiles.slice(0, index + 1)
        dispatch(setOpenedFiles(newFiles))
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)){
                setMenuOpen(false)
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [setMenuOpen])

  return (
    <div ref={menuRef}>
        <ul 
            className="bg-white border border-gray-200  w-48 py-2 rounded-md shadow-lg"
            style={{
                position: "absolute",
                top: y,
                left: x
            }}
        >
            <li 
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                onClick={onClose}
            >
                close
            </li>
            <li
                className="border-t border-gray-200"
            >
            </li>
            <li 
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                onClick={onCloseOthers}
            >
                close others
            </li>
            <li
                className="border-t border-gray-200"
            >
            </li>
            <li 
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                onClick={onClosetoRight}
            >
                close all to the right
            </li>
            <li
                className="border-t border-gray-200"
            >
            </li>
            
            <li 
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                onClick={onCloseAll}
            >
                close all
            </li>
            
        </ul>
    </div>
  )
}

export default ContextMenu