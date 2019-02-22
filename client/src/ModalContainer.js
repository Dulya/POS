import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import { default as modalTypes } from './Modals';

const mapStateToProps = state => {
    return {
        modal: { ...state.modal }
    }
}

const MODAL_TYPES = {
    'alert': modalTypes.alertModal,
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
        if (nextProps !== this.props) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {
        if (!this.props.modal.modalType) {
            console.log("in modal container",this.props.modal.modalType);
            return null
        }

        const SpecifiedModal = MODAL_TYPES[this.props.modal.modalType]

        return (

            <div>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >

                    <SpecifiedModal
                        closeModal={this.closeModal}
                        {...this.props.modal.modalProps}
                    />

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </ReactModal>
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(ModalContainer)
