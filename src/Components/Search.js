import { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const { tickets } = props;
  const { ticket } = props;
  console.log(props);
  const navigate = useNavigate();

  const [title, setTitle] = useState(ticket.title);
  const [text, setText] = useState(ticket.text);
  const [author, setAuthor] = useState(ticket.author);
  const [categories, setCategories] = useState(ticket.categories);
  const [isEditing, setIsEditing] = useState(false);
  const [searchItems, setSearchItems] = useState(tickets);
  const [comment, setComment] = useState("");
  const [creator, setCreator] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    setSearchItems(
      tickets.filter((ticket) => ticket.title.toLowerCase().includes(value))
    );
  };

  const handleUpdateToDo = async (ticketid) => {
    const URL = process.env.REACT_APP_URL_ENDPOINT;
    await axios
      .put(`${URL}/tickets/update-ticket/${ticketid}`, {
        title: title,
        text: text,
        author: author,
        categories: categories,
      })
      .then((response) => {
        console.log("Resource updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
      });
  };

  const handleUpdateComment = async (ticketId) => {
    const URL = process.env.REACT_APP_URL_ENDPOINT;
    console.log(comment);
    console.log(creator);
    await axios
      .put(`${URL}/tickets/comments/${ticketId}`, {
        comment: comment,
        createdBy: creator, // Use the comment state variable here
      })
      .then((response) => {
        console.log("Resource updated successfully");
        setComment("");
        setCreator(""); // Clear the comment input after updating the resource
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
      });
  };

  const handleDeleteTicket = async (ticketid) => {
    const URL = process.env.REACT_APP_URL_ENDPOINT;
    console.log(comment);
    await axios
      .delete(`${URL}/tickets/delete-ticket/${ticketid}`)
      .then((response) => {
        console.log("Resource deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        value={searchInput}
        onChange={handleChange}
      />
      <button>Search</button>
      <div className="card-columns">
        {searchItems.map((ticket, index) => (
          <Card style={{ width: "45rem", margin: "10px" }} key={index}>
            <Card.Header style={{ color: "blue" }}>
              {!isEditing && <h1>{ticket.title}</h1>}
              {isEditing && (
                <input
                  placeholder={ticket.title}
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              )}
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ color: "black" }}>
                {!isEditing && <i>{ticket.text}</i>}
                {isEditing && (
                  <textarea
                    placeholder={ticket.text}
                    type="text"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                 
                )}
                </Card.Text>
                <Card.Text style={{color:"black"}}>
                {!isEditing && <b>Author: {ticket.author}</b>}
                {isEditing && (
                  <input
                    placeholder={ticket.author}
                    type="text"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                  />
                )}
              </Card.Text>
             
            </Card.Body>
            <Card.Footer style={{ color: "grey" }}>
                {!isEditing && <b>Categories: {ticket.categories}</b>}
                {isEditing && (
                  <input
                    placeholder={ticket.categories}
                    type="text"
                    value={categories}
                    onChange={(e) => {
                      setCategories(e.target.value);
                    }}
                  />
                )}
                <br/>ID {ticket.id}
              </Card.Footer>
            <Card.Footer>
              <Button
                variant="danger"
                onClick={() => handleDeleteTicket(ticket.id)}
              >
                Delete Ticket
              </Button>
              {!isEditing && (
                <Button variant="primary" onClick={() => setIsEditing(true)}>
                  Edit Ticket
                </Button>
              )}
              {isEditing && (
                <Button
                  variant="success"
                  onClick={() => handleUpdateToDo(ticket.id)}
                >
                  Update Ticket
                </Button>
              )}
              {!isEditing && (
                <div style={{ color: "black" }}>
                  <label htmlFor="comment">Comment:</label>
                  <br />
                  <textarea
                    id="comment"
                    type="text"
                    placeholder="Enter comment"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />

                  {/* Add label and input field for author */}
                  <div>
                    <label htmlFor="author">Author:</label>
                    <br />
                    <input
                      id="author"
                      type="text"
                      placeholder="Enter author"
                      value={creator}
                      onChange={(e) => {
                        setCreator(e.target.value);
                      }}
                    />
                  </div>
                  <Button
                    variant="warning"
                    onClick={() => handleUpdateComment(ticket.id, comment)}
                  >
                    Add comment
                  </Button>
                </div>
              )}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
