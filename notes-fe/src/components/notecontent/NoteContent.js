import React from 'react';
import propTypes from 'prop-types';
import './NoteContent.css'

export default function NoteContent({ content }) {
    return (
        <div className="note-content">
            {content}
        </div>
    );
}

NoteContent.propTypes = {
    content: propTypes.string.isRequired
};