import { OPEN_MODAL } from '../actions/modalActions';
import { HIDE_MODAL } from '../actions/modalActions';

const initialState = {
    modalType: null,
    modalProps: {}
  }

export default function modalReducer(state = [], action) {
    console.log("in modal reducer :",action.modalProps);
    console.log("in modal reducer :",action.modalType);
    switch (action.type) {
        case OPEN_MODAL: return {
            modalProps:action.modalProps,
            modalType:action.modalType
        };
        case HIDE_MODAL: return initialState;
        default:return state;
    }
}