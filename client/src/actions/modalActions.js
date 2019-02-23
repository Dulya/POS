export const OPEN_MODAL = 'modal:openModal';
export const HIDE_MODAL = 'modal:hideModal';


export  function OpenModal(type, title, message) {
    return (dispatch) => {
                return dispatch({
                    type: OPEN_MODAL,
                    payload: {type, title, message, open:true}
                });               
    }
}

export function HideModal() {
    return (dispatch) => {
                return dispatch({
                    type: HIDE_MODAL,           
                });               
    }
}

