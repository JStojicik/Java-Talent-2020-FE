import React from 'react';
import axios from 'axios';
import { Nav, Col, Container, Row } from 'react-bootstrap';
import './UpdateNote.css'

export default class UpdateNote extends React.Component {


    constructor() {
        super()
        this.state = { id: "", title: "", content: "", noteTags: [], tags: [], selectedTag: "", titleError: "", contentError: "" }
    }


    componentDidMount() {
        axios.get('/api/notes/' + this.props.match.params.id)
            .then(response => {
                this.setState(st => ({
                    ...st,
                    id: response.data.id,
                    title: response.data.title,
                    content: response.data.content,
                    noteTags: response.data.tags

                }))
                axios.get('/api/tags/')
                    .then(response => {
                        let noteTagsIds = this.state.noteTags.map(tag => tag.id);
                        this.setState(st => ({
                            ...st,
                            tags: response.data.filter(tag => !noteTagsIds.includes(tag.id)),
                        }
                        ))
                    })
            }).catch((err) => console.log(err));
    }


    saveHandler = () => {
        axios.put(`/api/notes/` + this.props.match.params.id, {
            title: this.state.title,
            content: this.state.content,
            id: this.state.id,
            tagIds: this.state.noteTags.map(t => t.id),
        })
            .catch((err) => console.log(err));
    }


    handleTitleUpdate = e => {
        if (!e.target.value) {
            this.setState({ titleError: "Title is a mandatory field", title: "" })
            return;
        }
        this.setState({ titleError: "", title: e.target.value })
    }


    handleContentUpdate = e => {
        if (!e.target.value) {
            this.setState({ contentError: "Content is a mandatory field", content: "" })
            return;
        }
        this.setState({ contentError: "", content: e.target.value })
    }


    onSelectTag(e) {
        const selectedTag = e.target.value;
        this.setState(st => ({
            ...st,
            selectedTag: selectedTag
        }))
    }


    onAddTag = () => {
        if (this.state.tags.length === 0) {
            return;
        }
        const selectedTag = this.state.selectedTag ? this.state.selectedTag : this.state.tags[0].name;
        const tag = this.state.tags.filter(tag => tag.name === selectedTag)[0];
        const filteredTags = this.state.tags.filter(t => t.id !== tag.id)
        this.setState(st => (
            {
                ...st,
                noteTags: [...st.noteTags, tag],
                tags: filteredTags
            })
        )
    }


    onRemoveTag = (id) => {
        const tag = this.state.noteTags.filter(tag => tag.id === id)[0];
        const filteredTags = this.state.noteTags.filter(t => t.id !== id)
        this.setState(st => (
            {
                ...st,
                tags: [...st.tags, tag],
                noteTags: filteredTags
            })
        )
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="createForm">
                            <div>
                                <input
                                    className="titleInput"
                                    name="title"
                                    type="text"
                                    defaultValue={this.state.title}
                                    onChange={this.handleTitleUpdate}
                                    placeholder="Enter Title..." />
                                <p style={{ color: "red" }}>{this.state.titleError}</p>
                            </div>
                            <div>
                                <textarea
                                    className="textAreaWidth"
                                    name="content"
                                    rows="7" cols="70"
                                    defaultValue={this.state.content}
                                    onChange={this.handleContentUpdate}
                                    placeholder="Type Here..."></textarea>
                                <p style={{ color: "red" }}>{this.state.contentError}</p>
                            </div>
                            <div>
                                <select className="selectTag" onChange={this.onSelectTag.bind(this)} name="tags">
                                    {this.state.tags.length > 0 ? this.state.tags.map(t => (
                                        <option key={t.id} value={t.name} >{t.name} </option>
                                    )) : <option disabled /*selected*/>No available options...</option>}
                                </select>
                                <button
                                    className="addTagButton"
                                    style={{ backgroundColor: "white" }}
                                    onClick={this.onAddTag}>Add</button>
                            </div>
                            <div name="noteTags">
                                {this.state.noteTags.map(t =>
                                    <div className="noteTags" key={t.id} onClick={() => this.onRemoveTag(t.id)}>
                                        #{t.name}
                                    </div>)}
                            </div>
                            <div className="confirmation">
                                <Nav.Link href="/api/"><button className="saveButton"
                                    disabled={
                                        this.state.title.length === 0 ||
                                        this.state.content.length === 0
                                    } onClick={this.saveHandler}>Save</button></Nav.Link>
                                <Nav.Link className="linkNav" href="/api/"><button className="linkText" >Cancel</button></Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}