import React, { useState, useEffect } from "react";

function EventForm({ onAdd, editingEvent, onUpdate }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
      setDescription(editingEvent.description);
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return;

    const event = {
      id: editingEvent ? editingEvent.id : Date.now(),
      title,
      date,
      description
    };

    if (editingEvent) {
      onUpdate(event);
    } else {
      onAdd(event);
    }

    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Event description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="2"
      ></textarea>
      <button type="submit">{editingEvent ? "Update" : "Add"}</button>
    </form>
  );
}

export default EventForm;
