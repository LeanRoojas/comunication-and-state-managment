import { useGentlemanContext } from "../context/gentleman.context"

function ComponentContext2() {

  const { contextValue } = useGentlemanContext()

  return (
    <div>El value es: {contextValue}</div>
  )
}

export default ComponentContext2