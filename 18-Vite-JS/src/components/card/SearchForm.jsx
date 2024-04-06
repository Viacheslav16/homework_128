import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export default function SearchForm ({onSearch}){
    const [search,setSearch] = useState('Batman')

    function submitHandler(e){
        e.preventDefault()
        onSearch(search)
    }

    return (
        <Form onSubmit={submitHandler}>
        <Row>
            <Col lg ="10">
                <Form.Control type="text" onChange={(e)=> setSearch(e.target.value)} value={search}/>
            </Col>
            <Col lg ="2">
                <Button type="submit" variant="info">Search</Button>
            </Col>
        </Row>
    </Form>
    )
}