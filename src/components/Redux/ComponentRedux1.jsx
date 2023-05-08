import { useDispatch } from "react-redux"
import { createUser, modifyUser, resetUser } from "../../redux/states/user"

function ComponentRedux1() {

    const dispatcher = useDispatch()

    const handleClick = () => {
        dispatcher(createUser({ name: 'Leandro', email: 'leandro@gmail.com' }))
    }

    const handleClick2 = () => {
        dispatcher(modifyUser({ name: 'Leandro Gabriel', email: 'leandro@gmail.com' }))
    }

    const handleClick3 = () => {
        dispatcher(resetUser())
    }

    return (
        <div>
            <button onClick={handleClick}>Send info by Redux, create user</button>
            <button onClick={handleClick2}>Send info by Redux, modify user</button>
            <button onClick={handleClick3}>Send info by Redux, reset user</button>
        </div>
    )
}

export default ComponentRedux1