import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

export default function MovieItem({item, onDetail}){
    return (
        <Card>
            <Card.Img variant="top" src={item.Poster} alt={item.Title}/>
            <Card.Body>
                <Card.Title>
                    <Link to={`movie/${item.imdbID}`}>{item.Title}</Link>
                    </Card.Title>
                <Card.Text>
                    <b>Year:</b> {item.Year}
                </Card.Text>
                <Button variant="primary" onClick={() => {onDetail(item.imdbID)}}>Detail</Button>
                <Button variant="warning" className="btn-fav">Add to fav</Button>
            </Card.Body>
        </Card>
       
    )
}