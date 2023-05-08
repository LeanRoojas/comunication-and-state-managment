import { useSelector } from "react-redux"

function ComponentRedux2() {

    const userState = useSelector( store => store.user)

  return (
    <div>el User states es: {JSON.stringify(userState)}</div>
  )
}

export default ComponentRedux2