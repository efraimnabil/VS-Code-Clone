import OpenedFilesBar from "./components/OpenedFilesBar"
import Preview from "./components/Preview"
import RecursiveComp from "./components/RecursiveComp"
import ResizablePanel from "./components/ResizablePanel"
import { fileTree } from "./data/fileTree"


function App() {

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
            <Preview />
          }
        />
      </div>
    </div>
  )
}

export default App
