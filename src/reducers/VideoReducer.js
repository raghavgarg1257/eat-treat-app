import { YOUTUBE_VIDEO } from '../const';

export default function( state = null, action) {

    switch (action.type) {
        case YOUTUBE_VIDEO : return action.payload;

        default: return state;
    }

}
