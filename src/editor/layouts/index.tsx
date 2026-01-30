import Header from "./header"
import Stage from "./stage"
import Material from "./material"
import Setting from "./setting"
import { Allotment } from "allotment";
import "allotment/dist/style.css";


function Layout() {
  return (
    <div className="h-full w-full flex flex-col" >
      <Header />
      <div className="flex flex-1">
        <Allotment>
          <Allotment.Pane minSize={200} maxSize={400} preferredSize={300}>
            <Material />
          </Allotment.Pane>

          <Allotment.Pane>
            <Stage />
          </Allotment.Pane>

          <Allotment.Pane minSize={200} maxSize={400}>
            <Setting />
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  )
}

export default Layout