import axios from 'axios';

import { YOUTUBE_VIDEO } from '../const';

function emitYoutubeVideoAction(data) {
    return {
        type : YOUTUBE_VIDEO,
        payload : data
    };
}

export const YoutubeVideoAction = () => dispatch => {
    axios.get(`${API_URL}/search`, {
        params : {
            part : 'snippet',
            order : 'viewCount',
            q : 'food',
            maxResults : 20,
            key : API_KEY
        }
    })
    .then( res => {
        if (res.status == 200) {
            dispatch(emitYoutubeVideoAction(res.data.items));
        }
        else {
            dispatch(emitYoutubeVideoAction([]));
        }
    });
}
