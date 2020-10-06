import React from 'react';
import './App.css';
import NotesGrid from './components/notesgrid/NotesGrid';
import Header from './components/header/Header';
import ManageTags from './components/managetags/ManageTags';
import { Switch, Route, Link } from 'react-router-dom';
import UpdateNote from './components/updatenote/UpdateNote';
import FilterNotes from './components/filternotes/FilterNotes'
import CreateNote from './components/createnote/CreateNote';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/api/notes-tags/:id" component={FilterNotes}></Route>
        <Route exact path={["/api","/"]} component={NotesGrid} />
        <Route exact path="/api/update-note/:id" component={UpdateNote} />
        <Route exact path="/api/tags" component={ManageTags} />
        <Route exact path="/api/create-note" component={CreateNote} />
      </Switch>
      <Link to="/api/create-note"><button className="buttonAdd">&#43;</button></Link>
    </div>
  );
}
export default App;
