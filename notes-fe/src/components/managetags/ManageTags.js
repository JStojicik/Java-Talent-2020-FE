import React, {Component} from 'react';
import axios from 'axios';
import TagDelete from '../tagdelete/TagDelete';
import { Container, Row, Col } from 'react-bootstrap';
import './ManageTags.css'


export default class ManageTags extends Component {

    constructor(props) {
        super(props);
        this.state = { tags: [], newTagName: "", updateTagName: "" };
        this.delete = this.delete.bind(this);
    }


    componentDidMount() {
        axios.get('/api/tags')
            .then(response => {
                this.setState(st => ({...st ,tags: [...response.data] }))
            })
            .catch((err) => console.log(err));
    }


    delete(id) {
        axios.delete(`/api/tags/${id}`)
            .then(() => {
                this.setState(st => ({
                    ...st,
                    tags: st.tags.filter(t => t.id !== id)
                }))
            })
            .catch((err) => console.log(err));
    }


    onChangeCreateHandler = e => {
        if (!e.target.value) {
            return;
        }
        this.setState({ newTagName: e.target.value })
    }


    onClickCreateHandler = () => {
        axios.post('/api/tags', { name: this.state.newTagName })
            .then(response => {
                this.setState(st => ({ ...st, tags: [...st.tags, response.data], newTagName: "" }))
            })
            .catch((err) => console.log(err));
    }


    onChangeUpdateHandler = (id, e) => {
        if (!e.target.value) {
            return;
        }
        axios.put(`/api/tags/${id}`, { name: e.target.value })
            .then(response => {
                this.setState(st => ({
                    ...st,
                    tags: st.tags.map(tag => { if (tag.id === response.data.id) { return response.data } return tag })
                }))
            })
            .catch((err) => console.log(err));

    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={6} className="menageTag" >
                        <div>
                            <input type="text" className="inputTextCreate" placeholder="Type new tag name..." onChange={this.onChangeCreateHandler} value={this.state.newTagName} />
                            <button className="createTagButton" disabled={this.state.newTagName.length === 0} onClick={this.onClickCreateHandler}>Create</button>
                        </div>
                        <hr></hr>
                        {this.state.tags.map(t => 
                        
                           <div className="tagsInputs" key={t.id}>
                                <input className="inputText" type="text" onBlur={(e) => this.onChangeUpdateHandler(t.id, e)} defaultValue={t.name} />
                                <TagDelete tagId={t.id} deleteTag={this.delete}></TagDelete>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }

}