import React, { Component } from 'react';
import Article from './Article';
// import ArticleWithId from './ArticeWithId';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
// import SkillWithId from "./SkillWithId";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class MainRouter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = <Home />
        const ArticleWithId = () => {
            return(
                <div className='container'>
                    Article Id -
                </div>
            )
        };
        const SkillWithId = () => {
            return(
                <div className='container'>
                    Skill Id -
                </div>
            )
        };

        return (
            <div className="App">
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/articles" component={() => <Article articles={this.props.articles} />} />
                        <Route exact path="/articles/:articleId" component={ArticleWithId} />} />
                        <Route exact path="/skills" component={() => <Skills skills={this.props.skills} />} />
                        <Route exact path="/skills/:skillId" component={SkillWithId} />} />
                        <Route exact path="/contactme" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />} />
                        <Route exact path="/aboutme" component={() => <About />} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        )
    }

    
}

export default MainRouter;