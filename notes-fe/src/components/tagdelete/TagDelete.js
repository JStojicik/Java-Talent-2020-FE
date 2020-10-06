import React from 'react';
import propTypes from 'prop-types';
import './TagDelete.css'
export default function TagDelete({ tagId, deleteTag }) {
    return (
        <button className="deleteTagButton" onClick={() => deleteTag(tagId)}>Delete</button>
    );
}
TagDelete.propTypes = {
    tagId: propTypes.number.isRequired,
    deleteTag: propTypes.func.isRequired
};