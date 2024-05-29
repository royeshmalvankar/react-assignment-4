import { Route, Routes } from "react-router-dom"
import Navbar from "../component/Navbar"
import Home from "../component/Home"
import Contact from "../component/Contact"
import Login from "../component/Login"
import Ticket from "../component/Tickets"
import About from "../component/About"
import TicketCreate from "../component/Ticket_create"
import Ticket_view from "../component/Ticket_view"
import Ticket_edit from "../component/Ticket_edit"
import PrivateRoute from "./privateroute"

const AllRoute = () => {

    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                <Route path="/" element={
                    <PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/contact" element={
                    <PrivateRoute><Contact /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/ticket" element={
                <PrivateRoute><Ticket /></PrivateRoute>} />
                <Route path="/about" element={
                <PrivateRoute><About /></PrivateRoute>} />
                <Route path="/ticket/create" element={
                <PrivateRoute><TicketCreate /></PrivateRoute>} />
                <Route path="/ticket/view/:id" element={
                <PrivateRoute><Ticket_view /></PrivateRoute>} />
                <Route path="/ticket/edit/:id" element={
                <PrivateRoute><Ticket_edit /></PrivateRoute>} />
                </Routes>
            </div>
        </div>
    )
}

export default AllRoute