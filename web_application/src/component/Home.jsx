import { Stack, Box, Button, ButtonGroup } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
        <div>   
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                h='200px'
                width='100%'
                py={200}
                bgImage="url('https://masai-website-images.s3.ap-south-1.amazonaws.com/iitg_dashboard_icon_1d2b80083c.webp')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
                bgSize='cover'
            >
                <ButtonGroup gap='4'>
                <Button colorScheme='whiteAlpha' onClick={() => navigate("/about")} >About</Button>
                <Button colorScheme='blackAlpha' onClick={() => navigate("/contact")}>Contact</Button>
                </ButtonGroup>
            </Box>
        </div>
        <div className="home">
            <h1>Pay After Placement</h1>
            <p>We believe that potential is evenly distributed across Indian society, but opportunity is not.
Masai is democratising education with a unique Pay After Placement (PAP) Model.
PAP allows you to study the course of your choice at <span style={{color:"red"}}>₹0 upfront fee.</span> </p>

        </div>
        </>
    )
}

export default Home