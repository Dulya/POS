import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import alertModal from './Modals'

const mapStateToProps = state => {
    return {
        modal: { ...state.modal }
    }
}

const MODAL_TYPES = {
    'alert': alertModal
}


class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modal.modalProps !== this.props.modal.modalProps) {
            console.log("open", nextProps.modal.modalProps.open);
            this.setState({
                modalIsOpen: nextProps.modal.modalProps.open
            })
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {
        if (!this.props.modal.modalType) {
            return null
        }
        
        const SpecifiedModal = MODAL_TYPES[this.props.modal.modalType]

        return (

            <div>
                <ReactModal
                    isOpen={true}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    overlayClassName="modal fade show"
                    bodyOpenClassName="modal-open"
                    className="modal-dialog modal-dialog-centered"
                >
                 
                    <SpecifiedModal
                        closeModal={this.closeModal} title={this.props.modal.modalProps.title} message={this.props.modal.modalProps.message}
                    />
                </ReactModal>
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(ModalContainer)


