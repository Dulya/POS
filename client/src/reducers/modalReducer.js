import { OPEN_MODAL } from '../actions/modalActions';
import { HIDE_MODAL } from '../actions/modalActions';

const initialState = {
    modalType: null,
    modalProps: {}
  }

export default function modalReducer(state = [], action) {
    switch (action) {
        case OPEN_MODAL: return {
            modalProps:action.modalProps,
            modalType:action.modalType
        };
        case HIDE_MODAL: return initialState;
        default:return state;
    }
}