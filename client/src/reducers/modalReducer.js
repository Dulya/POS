import { OPEN_MODAL } from '../actions/modalActions';
import { HIDE_MODAL } from '../actions/modalActions';

const initialState = {
    type: null,
    open: false,
    title: '',
    message: ''
  }

export default function modalReducer(state = [], action) {
    switch (action.type) {
        case OPEN_MODAL: return {
            ...initialState,
            ...action.payload
        };
        case HIDE_MODAL: return initialState;
        default:return state;
    }
}