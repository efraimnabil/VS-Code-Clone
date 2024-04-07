import { useSelector } from "react-redux"
import Preview from "./components/Preview"
import RecursiveComp from "./components/RecursiveComp"
import ResizablePanel from "./components/ResizablePanel"
import { fileTree } from "./data/fileTree"
import { RootState } from "./app/store"
import WelcomeTap from "./components/WelcomeTap"

function App() {
  const {openedFiles} = useSelector((state: RootState) => state.tree)
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel 
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComp fileTree={fileTree} />
            </div>
          }
          rightPanel={
            openedFiles.length ? <Preview /> : <WelcomeTap />
          }
        />
      </div>
    </div>
  )
}

export default App
