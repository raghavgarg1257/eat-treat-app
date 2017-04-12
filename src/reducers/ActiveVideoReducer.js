import { ACTIVE_VIDEO } from '../const';

export default function( state = null, action) {

    switch (action.type) {
        case ACTIVE_VIDEO : return action.payload;

        default: return state;
    }

}
