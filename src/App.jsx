import Gradient from "./components/Gradient"
import ColorInput from "./components/inputs/ColorInput"
import { useSelector } from "react-redux"
import AddRemoveColor from "./components/AddRemoveColor"
import RangeAngle from "./components/inputs/RangeAngle"
import SelectColor from "./components/inputs/SelectColor"
import RangeColorPosition from "./components/inputs/RangeColorPosition"
import OpenModalBtn from "./components/modal/OpenModalBtn"

function App() {
  const gradientValues = useSelector((state) => state.gradient)
  // console.log(gradientValues)

  return (
    <div className="relative text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">
      <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl mb-6">Gradient Generator</h1>

        <p className="mb-1">Colors (min 2, max 5)</p>
        <div className="flex mb-2">
          {gradientValues.colors.map((obj) => (
            <ColorInput id={obj.id} color={obj.value} key={obj.id} />
          ))}
        </div>
        <div className="mb-5">
          <AddRemoveColor action={"add"} text={"+"} />
          <AddRemoveColor action={"remove"} text={"-"} />
        </div>

        <p>Pick and change color position</p>
        <SelectColor />

        <p>Color position</p>
        <RangeColorPosition />

        <p>Gradient global angle</p>
        <RangeAngle />

        <OpenModalBtn />
      </div>

      <Gradient />
    </div>
  )
}

export default App
