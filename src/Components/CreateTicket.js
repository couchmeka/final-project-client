import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategories] = useState([]);

const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;
    try {
      const response = await axios.post(
        `${urlEndPoint}/tickets/create-ticket`,
        {
          title: title,
          text: text,
          author: author,
          categories: categories,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response && response.data) {
        console.log("Ticket created successfully!");
        alert("Ticket Submitted");
        onSubmit(response.data.ticket);

        setTitle("");
        setText("");
        setAuthor("");
        setCategories([]);
        navigate("/ticket");
        window.location.reload(false);
      } else {
        console.log("Error creating Ticket item.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Homepage/>
    <form onSubmit={handleSubmit}>
      <label>
        <h3>Title:</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        <h3>Text:</h3>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <label>
        <h3>Author</h3>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <input
        type="checkbox"
        id="category-production"
        name="category"
        value="development"
        onChange={(e) => setCategories(...categories, e.target.value)}
      />
      <label htmlFor="category-development">Development</label>
      <br />
      <input
        type="checkbox"
        id="category-production"
        name="category"
        value="production"
        onChange={(e) => setCategories(...categories, e.target.value)}
      />
      <label htmlFor="category-production">Production</label>
      <br />
      <input
        type="checkbox"
        id="category-design"
        name="category"
        value="design"
        onChange={(e) => setCategories(...categories, e.target.value)}
      />
      <label htmlFor="category-design">Design</label>
      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

const TicketingSystem = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <div>
      <h1>Ticketing System</h1>
      <TicketForm onSubmit={addTicket} />
    </div>
  );
};

export default TicketingSystem;
