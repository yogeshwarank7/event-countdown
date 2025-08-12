import React from "react";

function EventCard({ event, onEdit, onDelete }) {
  const daysLeft = Math.ceil(
    (new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>📅 {event.date}</p>
      <p>{daysLeft >= 0 ? `${daysLeft} days left` : "Expired"}</p>
      <div className="card-buttons">
        <button className="edit-btn" onClick={() => onEdit(event)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(event.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;
