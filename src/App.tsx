import RecursiveComp from "./components/RecursiveComp"
import { fileTree } from "./data/fileTree"


function App() {

  return (
    <div className="m-4">
        <RecursiveComp fileTree={fileTree} />
      
    </div>
  )
}

export default App
