import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import ItemCartModal from './Modals'
import {HideModal} from '../actions/modalActions'

const mapStateToProps = state => {
    return {
        ...state.modal
    }
}

const MODAL_TYPES = {
    'itemCart': ItemCartModal
}

ReactModal.defaultStyles.content.width = '95%';
ReactModal.defaultStyles.content.height = '800px';
ReactModal.defaultStyles.content.margin = 'auto';
ReactModal.defaultStyles.content.padding = '30px';

class ModalContainer extends React.Component {

    render() {
        console.log("Modal props", this.props);
        if (!this.props.type || !this.props.open) {
            return null
        }
        
        const SpecifiedModal = MODAL_TYPES[this.props.type];
        console.log("items here",this.props.items);

        return (

            <div>
                <ReactModal
                    isOpen={this.props.open}
                    onRequestClose={this.props.hideModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    bodyOpenClassName="modalStyle"
                    dialogClassName="modalStyle"
                    
                >
                 
                    <SpecifiedModal
                        closeModal={this.props.hideModal} title={this.props.title} items={this.props.items}
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


