import axios from "axios"
import { useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const TicketCreate = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        description:"",
        assigne: "",
        status: "",
        priority: "0",
    })
    const handleSubmit = async () => {
        console.log(data);
         await axios.post("http://localhost:3001/tickets", data)
         navigate("/ticket")
    }

    return (
        <>
        <div className="ticket-create">
            <h1>Ticket Create</h1>
            <br />
            <label htmlFor="">Title: </label>
            <input type="text" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
            <br />
            <br />
            <label htmlFor="" >Description: </label>
            <input type="text" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
            <br />
            <br />
            <label htmlFor="">Assignee: </label>
            <select name="" id=""  value={data.assigne} onChange={(e) => setData({ ...data, assigne: e.target.value })}>
                <option value="">Assigne</option>
                <option value="John">John</option>
                <option value="Jane">Jane</option>
                <option value="Joe">Joe</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Status: </label>
            <select name="" id="" value={data.status} onChange={(e) => setData({ ...data, status: e.target.value })}>
                <option value="">Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Priority: </label>
            <select name="" id="" value={data.priority} onChange={(e) => setData({ ...data, priority:Number( e.target.value )})}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
            </select>
            <br />
            <Button colorScheme='blue' size='sm'  onClick={handleSubmit}>Submit Ticket</Button>
            {/* <button >Create</button> */}
        </div>
        <div style={{marginTop:"20px"}}>
        <Button colorScheme='gray' size='lg' variant="solid" margin="0" marginLeft="48%" onClick={() => navigate("/ticket")}>Back</Button>
        </div>
           
        </>
    )
}

export default TicketCreate