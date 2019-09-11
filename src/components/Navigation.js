import React, { useState, useEffect } from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

export default function Navigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Ironforge</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline onSubmit={props.onSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search"/>
                    <Button variant="outline-info" type="submit">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
