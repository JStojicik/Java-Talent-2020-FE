import React from 'react';
import propTypes from 'prop-types';
import './NoteHeader.css';
export default function NoteHeader({ title, noteId, deleteNote }) {
    return (
        <div className="note-header">{title}
            <button 
            className="deleteButton" 
            onClick={() => deleteNote(noteId)}>&#10006;</button>
        </div>
    );
}
NoteHeader.propTypes = {
    title: propTypes.string.isRequired,
    noteId: propTypes.number.isRequired,
    deleteNote: propTypes.func.isRequired
};