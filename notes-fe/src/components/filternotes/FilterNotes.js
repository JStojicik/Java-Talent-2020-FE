import React from 'react';
import axios from 'axios';
import NoteHeader from '../noteheader/NoteHeader';
import NoteContent from '../notecontent/NoteContent';
import NoteFooter from '../notefooter/NoteFooter';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './FilterNote.css'

export default class FilterNotes extends React.Component {
    constructor() {
        super();
        this.state = { notes: [] };
    }


    componentDidMount() {
        axios.get('/api/notes/tags/' + this.props.match.params.id)
            .then(response => {
                this.setState(st => ({ ...st, notes: [...response.data] }))
            })
            .catch((err) => console.log(err));
    }


    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps.match.params.id !== this.props.match.params.id) {
    //         axios.get('/api/notes/tags/' + nextProps.match.params.id)
    //         .then(response => {
    //             this.setState(st => ({ ...st, notes: [...response.data] }))
    //         })
    //         .catch((err) => console.log(err));
    //     }
    //   }


    delete = (id) => {
        axios.delete(`/api/notes/${id}`)
            .then(() => {
                this.setState(st => ({
                    ...st,
                    notes: st.notes.filter(n => n.id !== id)
                }))
            })
            .catch((err) => console.log(err));
    }


    render() {
        return (
            <div className="divContainer">
                <Container>
                    <Row>
                        <div className="cancelFilter"><Link to="/api"><header><button style={{ backgroundColor: "white" }}>Cancel Filter</button></header></Link></div>
                    </Row>
                    <Row>
                        {this.state.notes.map(note => {
                            return (
                                <Col key={note.id} xs={12} md={6} lg={3}>
                                    <div className="note">
                                        <NoteHeader title={note.title} noteId={note.id} deleteNote={this.delete} />
                                        <NoteContent content={note.content} />
                                        <NoteFooter tags={note.tags} />
                                        <div className="editButton">
                                            <Link to={`/api/update-note/${note.id}`}><i className="fas fa-pen"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}