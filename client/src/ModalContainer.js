import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import alertModal from './Modals'
import {HideModal} from './actions/modalActions'

const mapStateToProps = state => {
    return {
        ...state.modal
    }
}

const MODAL_TYPES = {
    'alert': alertModal
}


class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Modal props", this.props);
        if (!this.props.type || !this.props.open) {
            return null
        }
        
        const SpecifiedModal = MODAL_TYPES[this.props.type];

        return (

            <div>
                <ReactModal
                    isOpen={this.props.open}
                    onRequestClose={this.props.hideModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    bodyOpenClassName="modal-open"
                    className="modal-dialog modal-dialog-centered"
                >
                 
                    <SpecifiedModal
                        closeModal={this.props.hideModal} title={this.props.title} message={this.props.message}
                    />
                </ReactModal>
            </div>
        )
    }
}

const mapActionsToProps = {
    hideModal: HideModal,
};

export default connect(mapStateToProps, mapActionsToProps)(ModalContainer)


