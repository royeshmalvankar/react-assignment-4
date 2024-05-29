import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import axios from "axios"
const TicketView = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        getTicket()
    })

    const getTicket = async () => {
        const response = await axios.get(`http://localhost:3001/tickets/${id}`)
        setData(response.data)
    }

    const deleteTicket = async () => {
        await axios.delete(`http://localhost:3001/tickets/${id}`)
        navigate("/ticket")
    }

    return (
        <div >
            <h1 style={{ textAlign: "center", marginTop: "20px",fontSize:"50px" }}>Ticket Details</h1>
            <div className="ticket-view">
                <h1>Title: <i>{data.title}</i></h1>
                <h3>Status: <i>{data.status}</i></h3>
                <h3>Description: <i>{data.description}</i></h3>
                <h3>Assignee: <i>{data.assigne}</i></h3>
                <h3>Priority:<i> {data.priority}</i></h3>
                <Button colorScheme='gray' size='lg' variant="solid"  onClick={() => navigate(`/ticket/edit/${data.id}`)}>Edit</Button>
                <Button colorScheme='gray' size='lg' variant="solid"  onClick={deleteTicket}>Delete</Button>
                <Button colorScheme='gray' size='lg' variant="solid" onClick={() => navigate("/ticket")}>Back</Button>
            </div>
        </div>
    )
}

export default TicketView