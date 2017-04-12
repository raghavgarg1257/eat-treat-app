import axios from 'axios';

import { ACTIVE_VIDEO } from '../const';

function emitActiveVideoAction(data) {
    return {
        type : ACTIVE_VIDEO,
        payload : data
    };
}

export const ActiveVideoAction = id => dispatch => {

    if (id !== null) {
        axios.get(`${API_URL}/videos`, {
            params : {
                part : 'snippet',
                id : id,
                key : API_KEY
            }
        })
        .then( res => {
            if (res.status == 200) {
                dispatch(emitActiveVideoAction(res.data.items[0]));
            }
            else {
                dispatch(emitActiveVideoAction(null));
            }
        });

    } else {
        dispatch(emitActiveVideoAction(null));
    }

}
