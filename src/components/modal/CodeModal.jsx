import { useEffect } from "react"
import { useSelector } from "react-redux"
import getGradientCSSValue from "../../utils/getGradientCSSValue"

export default function CodeModal({closeModal}) {
  const gradientValues = useSelector(state => state.gradient)  

  let runningAnimation = false
  function handleCopy(e){
    if(!runningAnimation) {
        runningAnimation = true
        e.target.textContent = "copied!"

        navigator.clipboard.writeText(`background-image: ${getGradientCSSValue(gradientValues)}`)

        setTimeout(() => {
            e.target.textContent = "copy"
            runningAnimation = false
        }, 2000)
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => document.body.style.overflowY = "visible"
  }, [])

  return (
    <div
    onClick={closeModal}
    className="fixed z-1 top-0 left-0 w-full h-full bg-gray-800/50 bg-blur flex justify-center items-center">
        <div 
        onClick={e => e.stopPropagation()}
        className="mb-[10vh] max-w-[500px] rounded p-7 bg-gray-50">
            <div className="flex items-center mb-5">
                <p className="font-semibold text-gray-950 mr-8">Here is your code ✔</p>
                <button
                onClick={handleCopy}
                className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
                    copy
                </button>
                <button
                onClick={closeModal}
                className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                    close
                </button>
            </div>
            <p className="rounded bg-gray-900 p-5 text-gray-200 ">
                {`background-image: ${getGradientCSSValue(gradientValues)}`}
            </p>
        </div>
    </div>
  )
}