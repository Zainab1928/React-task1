import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListDemo.css';

export default function ListDemo() {

    const info = [

        { firstname: 'John', lastname: 'David' },
        { firstname: 'Mitali', lastname: 'Dere' },
        { firstname: 'Heena', lastname: 'Dongarkar' },
        { firstname: 'Misbah', lastname: 'Mukadam' },
        { firstname: 'Sadiya', lastname: 'Phansopkar' },
        { firstname: 'Safa', lastname: 'Mirkar' },
        { firstname: 'Nasira', lastname: 'Bhatkar' },
        { firstname: 'Shainaz', lastname: 'Dongarkar' },
        { firstname: 'Yasmeen', lastname: 'Solkar' },
    ];

    const [data, setData] = useState(false);

    const handleList = () => {
        setData(!data);
    };

    let id = 1;
    return (
        <Container>
            <h1>FirstName and their LastName</h1>
            <Button onClick={handleList} variant="primary" className="mb-3">
                {data ? "Hide List" : "Show List"}
            </Button>
            {data &&
                <ListGroup>
                    {info.map((item, index) => (
                        <ListGroup.Item variant="dark" key={index}>{id++}. {item.firstname}: {item.lastname}</ListGroup.Item>
                    ))}
                </ListGroup>
            }
        </Container>
    );
}