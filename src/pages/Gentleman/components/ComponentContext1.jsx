import { useGentlemanContext } from "../context/gentleman.context"

export default function ComponentContext1() {

    const { setContextValue } = useGentlemanContext()

    const handleClick = () => {
        setContextValue('Hola desde context')
    }

  return (
    <div>
        <button onClick={handleClick}>Sed info by context</button>
    </div>
  )
}
