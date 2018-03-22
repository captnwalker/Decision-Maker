import React from 'react';
import Modal from 'react-modal';

class InfoModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: true
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <button className="info-btn" onClick={this.handleOpenModal}>How Dilemma Decider Works</button>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Info"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    closeTimeoutMS={1500}
                    className="option-modal"
                >
                    <div className="info-modal">

                        <h2 className="info-modal__title">
                        How does The Delimma Decider's AI algorithm work?
                        </h2>

                        <p className="p-info"> First, The Delimma Decider puts your choices through a Natural Language Processor in order to abstract your thought processes into a machine readable format. Second, this machine readable data is used to query various databases like Wikipedia, Google Scholar, and IBM's Watson. Finally, the results are graphed in Euclidean space and a solution is choosen using integral calculus with transcendentals.</p>

                        <h2 className="info-modal__title">Really?</h2>

                        <p className="p-info">Nah, it just picks a choice at random.</p>

                    <button className="info-btn" onClick={this.handleCloseModal}>
                    Close when your ready to decide...
                    </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

const props = {};


export default InfoModal;