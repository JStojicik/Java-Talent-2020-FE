import React, { Component } from 'react';
// For our data fetching exercise we're gonna take advantage of the Notes REST API that you already created.
//
// It is best to use lifecycle method `componentDidMount` to
// make AJAX requests. This method will be called once before the component
// is inserted into the document, regardless of how many times `render` is
// called.
//
// Exercise:
//
//  Create a NotesGrid component that lists all the notes from http://localhost:8080/api/notes.
//  This component needs to display all the notes in a grid with their info as "title", "content", "tags".
//

export default class NotesGrid extends Component {
    render() {
        return (
            <div>
                Notes! Render the Grid of notes in here.
            </div>
        );
    }
}
export const Example = () => <NotesGrid />;
