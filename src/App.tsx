import OpenedFilesBar from "./components/OpenedFilesBar"
import RecursiveComp from "./components/RecursiveComp"
import { fileTree } from "./data/fileTree"


function App() {

  return (
    <div className="m-4">
        <RecursiveComp fileTree={fileTree} />
        <OpenedFilesBar />
    </div>
  )
}

export default App
