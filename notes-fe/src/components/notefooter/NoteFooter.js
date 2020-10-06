import React from 'react';
import PropTypes from 'prop-types';
import './NoteFooter.css';
import { Link } from 'react-router-dom';

export default function NoteFooter({ tags }) {
    return (
        <div className="note-footer">

            {tags.map(tag => <Link className="tagLinkNote" key={tag.id} to={`/api/notes-tags/${tag.id}`}><span className="tagName" >#{tag.name}</span></Link>)}

        </div>
    );
}
NoteFooter.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
};