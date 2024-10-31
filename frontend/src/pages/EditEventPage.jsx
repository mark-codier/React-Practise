import { useParams } from "react-router-dom"
export default function EditEventPage(){
    const {eventId} = useParams()
    return(
        <h1>EditEventPage - {eventId}</h1>
    )
}