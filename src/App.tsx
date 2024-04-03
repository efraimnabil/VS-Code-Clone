import RecursiveComp from "./components/RecursiveComp"
import { fileTree } from "./data/fileTree"


function App() {

  return (
    <div className="m-7">
        <RecursiveComp fileTree={fileTree} />
      
    </div>
  )
}

export default App
