import { Col, Container, Row } from "react-bootstrap";

export default function PageTemplate({ children }) {
    return (
        <>
            <title>Lambrock Festival 2023</title>
            <Container>
                <Row className="mt-4">
                    <Col>{children}</Col>
                </Row>
            </Container>
        </>
    );
}
