export const OPEN_MODAL = 'modal:openModal';
export const HIDE_MODAL = 'modal:hideModal';


export  function OpenModal(modalProps,modalType) {
    console.log("In modal action",modalProps);
    console.log("In modal action",modalType);
    return (dispatch) => {
                return dispatch({
                    type: OPEN_MODAL,
                    modalProps,
                    modalType                 
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

