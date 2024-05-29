import "../App.css"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, Link as ChakraLink, Flex } from '@chakra-ui/react'
import { Authcontext } from "../context/Authcontext";
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate=useNavigate()
  const {auth,logoutFunction}=useContext(Authcontext)
  const {isloggedIn}=auth
  const links=[
    {path:"/",name:"Home"},
    {path:"/about",name:"About"},
    {path:"/contact",name:"Contact"},
    {path:"/ticket",name:"Ticket"},
    isloggedIn?{path:"",name:""}:{path:"/login",name:"Login"},
  ]

  const logout=()=>{
    logoutFunction()
    navigate("/login")
  }
    return (
      <>
      <Flex className="navbar" backgroundColor={"#4C5966"} >
        {links.map((links) =>
        <ChakraLink style={{textDecoration:"none"}} color={"white"} _hover={{color:"red"}} fontSize={"20px"} mr={10} as={ReactRouterLink} key={links.path} to={links.path}>
        {links.name}
        </ChakraLink>
        )}
        {isloggedIn?<Button colorScheme='red' size='lg' variant="solid" onClick={logout}>Logout</Button>:null}
      </Flex>
        </>
      )
}

export default Navbar