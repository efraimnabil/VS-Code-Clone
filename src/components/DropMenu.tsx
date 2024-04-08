import { useRef, useEffect } from "react"

interface IProps {
    setMenuOpen: (arg: boolean) => void
    positions: {
        x: number
        y: number
    }
}

const DropMenu = ({positions, setMenuOpen}: IProps) => {
    const {x, y} = positions
    const menuRef = useRef<HTMLDivElement>(null)

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
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800">
                close all
            </li>
        </ul>
    </div>
  )
}

export default DropMenu