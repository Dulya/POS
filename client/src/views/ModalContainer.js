import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import ItemCartModal from "./Modals";
import { HideModal } from "../actions/modalActions";

const mapStateToProps = state => {
  return {
    ...state.modal
  };
};

const MODAL_TYPES = {
  itemCart: ItemCartModal
};

ReactModal.defaultStyles.content.width = "900px";
ReactModal.defaultStyles.content.height = "800px";
ReactModal.defaultStyles.content.margin = "auto";
ReactModal.defaultStyles.content.padding = "30px";
ReactModal.defaultStyles.content.overflow = "hidden";

class ModalContainer extends React.Component {
  render() {
    console.log("Modal props", this.props);
    if (!this.props.type || !this.props.open) {
      return null;
    }

    const SpecifiedModal = MODAL_TYPES[this.props.type];

    return (
      <div>
        <ReactModal
          isOpen={this.props.open}
          onRequestClose={this.props.hideModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <SpecifiedModal
            closeModal={this.props.hideModal}
            title={this.props.title}
            items={this.props.items}
          />
        </ReactModal>
      </div>
    );
  }
}

const mapActionsToProps = {
  hideModal: HideModal
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ModalContainer);
