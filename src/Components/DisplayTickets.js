import { Container, Row, Col, Card, Tab } from "react-bootstrap";
import { motion } from "framer-motion";

import {
  FaRegUser,
  FaTicketAlt,
  FaPaperclip,
  FaBook,
  FaComments,
} from "react-icons/fa";

import Homepage from "../Pages/Homepage";

const DisplayTicket = (props) => {
  
  const { tickets } = props;



  console.log(props);

  return (
    <motion.div layout >
    <div className="ticket-grid">
      <Homepage/>
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={3} className="gy-4">
          {tickets.map((ticket, index) => {
            return (
              <Col key={index}>
                <Card
                  key={ticket.id}
                  border="primary"
                  style={{ height: "100%" }}
                  className="ticket-card mb-4 hover-bounce"
                >
                  <Card.Header style={{ color: "blue" }}>
                    {ticket.title} <FaTicketAlt />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text style={{ color: "black" }}>
                      {ticket.text}
                    </Card.Text>
                    <Card.Footer style={{ color: "grey" }}>
                      <b>Categories:</b>
                      <FaPaperclip /> {ticket.categories}
                    </Card.Footer>
                    <Tab.Content>
                      <Card
                      bg="secondary"
                        key={ticket.id}
                        border="primary"
                        className="ticket-card mb-4 hover-bounce"
                      >
                        <Card.Header style={{ color: "yellow" }}>
                          Comments <FaBook />
                        </Card.Header>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>
                            <FaComments />
                            {ticket.comments.comment}
                          </Card.Title>
                          <Card.Text style={{ color: "black" }}>
                            <FaRegUser /> {ticket.comments.createdBy}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
    </motion.div>
  );
};

export default DisplayTicket;
