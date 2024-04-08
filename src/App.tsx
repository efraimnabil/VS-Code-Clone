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
            <div className="h-full rounded-3xl p-2 my-2 ml-2 bg-[#192230]">
              <RecursiveComp fileTree={fileTree} />
            </div>
          }
          rightPanel={
            <div className="h-full rounded-3xl my-2 mr-2 p-2 bg-[#192230]">
              {openedFiles.length ? <Preview /> : <WelcomeTap />}
            </div>
          }
        />
      </div>
    </div>
  )
}

export default App
