import React, { Component } from 'react';

// For controlled components, the idea is that you push the values from the component
// to the consumer via callback handlers. In the context of a form, this is normally
// via `onChange` which receives the `event` (and you can get the value via
// `event.target.value`) like so:
//
//     <input onChange={event => console.log(event.target.value)} />
//
// In this scenario, you also need to provide the value for the input like so:
//
//     <input value={this.state.value} />
//
// This gives you a lot more power over the input. 

// Exercise:
//   Render a EditNote form with an onSubmit handler that alerts the value of both title and content
//   while saving their data in the local component state
//   The submit button needs to be disabled if there is an error.
//   Error message needs to be displayed when: 
//     - The title is empty - "Title is a mandatory field"
//     - The content is empty - "Content is a mandatory field"
//     - The title contains more than 10 characters - "Title cannot contain more than 10 characters"
//   Since this is a EditNote functionality, we need to make sure to display the 'Default Title' and 'Default Content'
//   when our component is rendered. 
class EditNoteForm extends Component {
    state = { title: this.props.defaultTitle, content: this.props.defaultContent, titleError: "", contentError: "" }

    onChangeTitleHandler = e => {
        if (e.target.value === "") {
            this.setState({ titleError: "Title is a mandatory field" })
            this.setState({ title: this.state.title = e.target.value })
        } else if (e.target.value.length > 10) {
            this.setState({ titleError: "Title cannot contain more than 10 characters" })
            this.setState({ title: this.state.title = e.target.value })
        } else {
            this.setState({ title: this.state.title = e.target.value })
            this.setState({ titleError: "" })
        }
    }

    onChangeContentHandler = e => {
        if (e.target.value === "") {
            this.setState({ contentError: "Content is a mandatory field" })
            this.setState({ content: this.state.content = e.target.value })
        } else {
            this.setState({ content: this.state.content = e.target.value })
            this.setState({ contentError: "" })
        }
    }

    onSubmitHandler = e => {
        alert(`Title: ${this.state.title}, Content: ${this.state.content}`)
    }

    render() {
        const { title, content } = this.state;
        return <div>
            <label> Title </label><input type="text" onChange={this.onChangeTitleHandler} value={this.state.title} />
            <div style={{ color: 'red' }}>
                {this.state.titleError}
            </div>
            <label> Content </label><input type="text" onChange={this.onChangeContentHandler} value={this.state.content} />
            <div style={{ color: 'red' }}>
                {this.state.contentError}
            </div>
            <button
                disabled={
                    !this.state.title ||
                    this.state.content === "" ||
                    this.state.title.length > 10
                } type="submit" onClick={this.onSubmitHandler}>
                submit
            </button>
        </div>;
    }
}

export const Example = () => <EditNoteForm defaultTitle="Title" defaultContent="Default Content" />;
