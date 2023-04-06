import { useState } from "react";
import { Container, Row, Col, Card, Tab } from "react-bootstrap";

const DisplayTicket = (props) => {
  const { tickets } = props;
 
  console.log(props);

  const ticketComment = tickets.map((ticket, index) => {
    return (
      <>
      <Card key={ticket.id} border="primary" className="ticket-card mb-4 hover-bounce">
        <Card.Header style={{ color: "blue" }}>Comment Card</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "grey" }}>
            Comment:{ticket.comments.comment}
          </Card.Title>
          <Card.Text style={{ color: "black" }}>
            Author:{ticket.comments.createdBy}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
  });

  return (
    <div className="ticket-grid">
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="gy-5 gx-5">
          {tickets.map((ticket, index) => {
            return (
              <Col key={index}>
                <Card
                  border="primary"
                  style={{ width: "25rem", height: "100%" }}
                  className="ticket-card mb-4 hover-bounce"
                >
                 
                  
                    <Card.Header style={{ color: "blue" }}>
                      {ticket.title}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ color: "black" }}>
                        {ticket.text}
                        <Card.Footer>
                          Categories: {ticket.categories}
                        </Card.Footer>
                      </Card.Text>
                      <Tab.Content>{ticketComment}</Tab.Content>
                    </Card.Body>
                  
                 
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default DisplayTicket;
