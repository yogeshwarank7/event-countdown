import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventCard from "./components/EventCard";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev)));
    setEditingEvent(null);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  return (
    <div className="app">
      <h1>🎯 Event Countdown</h1>
      <EventForm onAdd={addEvent} editingEvent={editingEvent} onUpdate={updateEvent} />
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={setEditingEvent}
              onDelete={deleteEvent}
            />
          ))
        ) : (
          <p className="no-events">No events yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
