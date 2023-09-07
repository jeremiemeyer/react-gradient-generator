import { useDispatch, useSelector } from "react-redux"
import gradient, { updateColorPosition } from "../../features/gradient"

export default function RangeColorPosition() {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient)

  return (
    <input 
    min="0"
    max="100"
    value={gradientValues.colors[gradientValues.pickedColorID - 1].position}
    onChange={e => dispatch(updateColorPosition(e.target.value))}
    className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
    type="range" />
  )
}