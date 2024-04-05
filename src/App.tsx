import OpenedFilesBar from "./components/OpenedFilesBar"
import RecursiveComp from "./components/RecursiveComp"
import { fileTree } from "./data/fileTree"


function App() {

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-gray-200">
          <RecursiveComp fileTree={fileTree} />
        </div>
          <OpenedFilesBar />
      </div>
    </div>
  )
}

export default App
