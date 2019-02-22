export const OPEN_MODAL = 'modal:openModal';
export const HIDE_MODAL = 'modal:hideModal';


export  function OpenModal(modalProps,modalType) {
    return (dispatch) => {
                dispatch({
                    type: OPEN_MODAL,
                    modalProps,
                    modalType                 
                });               
    }
}

export function HideModal() {
    return (dispatch) => {
                dispatch({
                    type: HIDE_MODAL,                 
                });               
    }
}

