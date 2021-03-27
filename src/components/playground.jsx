import React, { Component } from 'react';
class playground extends Component {
    state = {
        // tags: []
        tags: ["tag1", "tag2"]
    };
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    renderTags(){
        if(this.state.tags.length === 0) return <p style={this.styles}>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render() { 
        return ( 
            <React.Fragment>

                {this.state.tags.length === 0 && <p 
                style={{fontSize:20, fontWeight: "bold"}}>
                    Please create new tags!</p>}
                {this.renderTags()}
            </React.Fragment>
         );
    }
}
 
export default playground;