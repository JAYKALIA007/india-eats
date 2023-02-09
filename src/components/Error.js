import { useRouteError } from "react-router-dom"
const Error = () => {
    const {status , statusText} = useRouteError()
    // console.log(status , statusText)
    return(
    <>
        <h1>Dang! It's an error</h1>
        <h3>{`${status} : ${statusText}`}</h3>
    </>
)}
export default Error