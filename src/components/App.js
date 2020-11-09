import CommentList from './CommentList';
import BodyText from './BodyText';
import PageHeader from './PageHeader';
import React, {Component} from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import reddit from '../api/reddit';

class App extends Component {
    
    state = {
        mainText: "", 
        pageTitle:"",
        title:"",
        score:"",
        commentCount: 0,
        comments: [] 
    };

    async componentDidMount() {
        const val = await reddit.get('/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json')
        const res = val.data;

        let structuredComments = {};
        for(let idx = 0; idx < res.comments.length; idx++) {
            let comment = res.comments[idx]; 
            comment['children'] = {};
            
            if (comment.parent_id === undefined) {
                structuredComments[comment.id] = res.comments[idx];
            } else {
                let result = this.parentSearch(structuredComments, comment.parent_id)
                if (result)
                {
                    result.children[comment.id] = comment;
                }
            }
        }
        res["structuredComments"] = structuredComments;

        //console.log('comp did mount2: ', data);
        this.setState({
            pageTitle: res.subreddit_name_prefixed,
            title: res.title,
            score: res.score,
            mainText: res.selftext, 
            comments: res.structuredComments,
            commentCount: res.comments.length
        });
    }  

    parentSearch = (searchObject, id) => {
        let found = undefined;
        if (searchObject[id]) {
            return searchObject[id];
        }
        for (let x in searchObject) {
            found = this.parentSearch(searchObject[x].children, id);
            if (found) {
                break;
            }
        }    
        return found;
    }

    deleteComment = (id) => {
        //shallow copy
        let updatedChildren = this.state.comments;
        delete updatedChildren[id];
        this.setState({comments:updatedChildren});
    }

    render(){
        return (
            <Container>
                <Header size='tiny'>{this.state.pageTitle}</Header>
                <PageHeader title={this.state.title} score={this.state.score}/>
                <Container>
                    <Segment>
                        <BodyText mainText={this.state.mainText} commentCount={this.state.commentCount}/>
                        <CommentList comments={this.state.comments} onTrashClick={this.deleteComment} />
                    </Segment>
                </Container>
            </Container>
        );
    }
}

export default App;