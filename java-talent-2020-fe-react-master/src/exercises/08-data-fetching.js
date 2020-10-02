import Axios from 'axios';
import React, { Component } from 'react';
import Note from './04-composition';
// import NoteComponent from './note-component';
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
    constructor(props) {
        super(props);
        this.state = { content: [] }
    }
    componentDidMount() {
        Axios.get("/api/notes")
            .then(response => {
                this.setState(st => ({ ...st, content: [...response.data] }))
            })
    }
    render() {
        return (
            <div>
                {this.state.content.map(note => {
                    return (
                        <Note key={note.id}  title={note.title} content={note.content} tags={note.tags}/>
                    )
                })}
            </div>

        );
    }
}
export const Example = () => <NotesGrid />;
