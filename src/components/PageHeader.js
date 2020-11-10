import './styles/pageheader.css';
import React from 'react';
import { Header, List } from 'semantic-ui-react';


class PageHeader extends React.Component {

    constructor(props){
        super(props);
        const scoreAsString = this.formatScore();
        this.state = {
            score:props.score,
            title:props.title
        };
    }

    formatScore() {
        const scoreLength = this.props.score.toString().length;
        let dotScore = 0;
        if (scoreLength < 4) {
            return this.props.score.toString();
        }
        else if (scoreLength < 7) {
            dotScore = this.props.score / 1000;
            return `${dotScore}k`;
        }
        else {
            dotScore = this.props.score / 1000000;
            return `${dotScore}M`;
        }
    }

    render() {
        return (
            <div className='page-title'>
                <List horizontal>
                    <List.Item>
                        <Header size='medium'>
                            {this.formatScore()}
                        </Header>
                    </List.Item>
                    <List.Item>
                        <Header size='large'>
                            {this.props.title}
                        </Header>
                    </List.Item>
                </List>
            </div>
        );
    }
}

// const PageHeader = (props) => {

//     return (
//         <div>
//             <Header floated='left'>
//                 {props.score}
//             </Header>
//             <Header>
//                 {props.title}
//             </Header>
//         </div>
//     );
// }

export default PageHeader;