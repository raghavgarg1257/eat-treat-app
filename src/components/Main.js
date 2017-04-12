import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Panel, ListGroup, ListGroupItem, Image, Col } from 'react-bootstrap';

import { isExist } from '../helpers';

// actions
import { YoutubeVideoAction } from '../actions/YoutubeVideoAction';

// class component
class Main extends Component {

    componentWillMount() {
        this.props.getYoutubeVideo();
    }

    getVideoHeader(title, id) {
        return <h3><Link to={`/video?q=${id}`}>{title}</Link></h3>;
    }

    renderData(videos) {
        if (!isExist(videos)) {
            if (videos === null) {
                return <div>loading</div>;
            }
            else {
                return <div>nothing found</div>;
            }
        }
        return (
            <ListGroup fill>
                {
                    videos.map( video => {
                        return (
                            <ListGroupItem key={video.etag} header={this.getVideoHeader(video.snippet.title, video.id.videoId)}>
                                <Image src={video.snippet.thumbnails.default.url} thumbnail />
                                {' '}
                                {video.snippet.description}
                            </ListGroupItem>
                        );
                    } )
                }
            </ListGroup>
        );
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Panel collapsible defaultExpanded header=''>
                        { this.renderData(this.props.video) }
                    </Panel>
                </Row>
            </Grid>
        );
    }
}

export default connect( store => { return {
    // variables as props from redux store
    video: store.reducedVideo,
} }, {
    // functions for action as props from actions
    getYoutubeVideo : YoutubeVideoAction
})(Main);
