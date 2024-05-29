import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button} from '@chakra-ui/react'
import { SimpleGrid ,Select,Flex, Spacer} from '@chakra-ui/react'

const TicketCard = (ele) => {
    const navigate = useNavigate()
    return(
        <>
    <div key={ele.id} className="ticket-card">
                            <h1>Title: <i>{ele.title}</i></h1>
                            <h3>Status: <i>{ele.status}</i></h3>
                            <h3>Priority: <i>{ele.priority}</i></h3>
                            <br />
                            <Button colorScheme='gray' size='lg' variant="solid" onClick={() => navigate(`/ticket/view/${ele.id}`)}>View</Button>
    </div>
    </>
    )
}
const Ticket = () => {

    const [tickets, setTickets] = useState([])
    const [sort , setSort] = useState("")
    const [priority , setPriority] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        getTickets(sort,priority)
    }, [sort,priority])

    const getTickets = async (sort,priority) => {
        const query = {}
                if(sort){
                    query.status = sort
                }
                if(priority){
                    query._sort = "priority"
                    query._order = priority;
            }
            console.log(query);
            const response = await axios.get("http://localhost:3001/tickets",{params:query})
            console.log(response);
        setTickets(response.data)
        
    }

    return (
        <div className="ticket">
            <h1>Tickets</h1>
            <Button colorScheme='gray' size='lg' variant="solid" onClick={() => navigate("/ticket/create")}>Create</Button>
            <div>
            <br />
                <h1>All Tickets</h1>
                <br />
                <Flex gap={4} margin={"20px"} >
                <Select placeholder='Sort By Status' variant={"filled"} value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value='Pending'>Pending</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </Select>
                <Spacer />
                <Select placeholder='Sort By Priority' variant={"filled"} value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </Select>
                </Flex>

                
                {/* <div className="ticket-card-container"> */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} margin={"20px"}>
                {tickets.map((ele) => {
                    return (
                        <TicketCard {...ele} key={ele.id} />
                    )
                })}
                </SimpleGrid>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Ticket