import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, PageHeader, ResponsiveEmbed, Panel, ListGroup, ListGroupItem, Image, Col } from 'react-bootstrap';

import { isExist } from '../helpers';

import { ActiveVideoAction } from '../actions/ActiveVideoAction';

class Video extends Component {

    componentWillMount() {
        // console.log(this.props.location.query.q);
        this.props.getActiveVideo(this.props.location.query.q);
    }

    componentWillUnmount() {
        this.props.getActiveVideo(null);
    }

    renderData(video) {
        if (!isExist(video)) {
            return 'loading...';
        }

        return (
            <div>
                <ResponsiveEmbed a16by9>
                    <iframe
                        // className='embed-responsive-item'
                        src={`https://www.youtube.com/embed/${video.id}`}
                        frameBorder="0"
                        allowFullScreen></iframe>
                        {/* <embed type="image/svg+xml" src="/assets/TheresaKnott_castle.svg" /> */}
                    </ResponsiveEmbed>
                <h3>{video.snippet.description}</h3>
            </div>
        );
    }

    render () {
        const { video } = this.props;

        return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={12}>
                        <PageHeader>{video ? video.snippet.title : 'loading...'}</PageHeader>
                        { this.renderData(video) }
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default connect( store => { return {
    // variables as props from redux store
    video: store.reducedActiveVideo,
} }, {
    // functions for action as props from actions
    getActiveVideo : ActiveVideoAction
})(Video);
