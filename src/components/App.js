import CommentList from './CommentList';
import BodyText from './BodyText';
import Header from './Header';
import React, {Component} from 'react';
import reddit from '../api/reddit';

class App extends Component {
    
    state = {
        mainText: "", 
        comments: [] 
    };

    async componentDidMount(){
        const res = await reddit.get('/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json');
        this.setState({
            mainText: res.data.selftext, 
            comments: res.data.comments 
        });
        //disseminate the returned data
            // update the header bar
            // update the body section
            // build out the comments list
    }   

    render(){
        return (
            <div className="ui container">
                <div>App</div>
                <Header />
                <BodyText mainText={this.state.mainText}/>
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default App;