import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} className="mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Nombre</Card.Title>
                            <Card.Text>
                                <p>Tel&eacute;fono:</p>
                                <p>Correo:</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);
};

export default Dashboard;