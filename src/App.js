import Examples from "./components/Examples";
import Info from "./components/Info";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS} from "./data"
import {EXAMPLES} from "./data"
function App() {
return (
  
  <div className="container">
    <Info>
      <h3>Core  Concepts</h3>
    <div className="concepts_container">
  
      {CORE_CONCEPTS.map(elm=>(
      <CoreConcept {...elm} />
        
      ))}

    </div>
    </Info>
    <Examples data={EXAMPLES} />
  </div>
)
   
}

export default App;
