/**
 * home
 */
'use strict'

import React from 'react'
import './index.less'
import comments from './data';


export default class HomePage extends React.Component {
	state = {
        comments: comments
    };
    componentDidMount = () => {
    	console.log(this.state.comments)
    };

    renderCommentList = ()=> {
        let commentsList = this.state.comments;
        return <div>
        	</div>
    };

    render() {
        return <div>
        	<p>hello world</p>
        </div>
    }
    
}