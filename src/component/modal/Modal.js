import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalTemplate from './ModalTemplate';
import ModalBody from './ModalBody';

let propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  withAnimation: PropTypes.bool,
  delay: PropTypes.number,
  className: PropTypes.string,
  modalStyle: PropTypes.object,
  backdropStyle: PropTypes.object,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  footer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
  ])
}

let defaultProps = {
  isOpen: false,
  withAnimation: true,
  delay: 200,
  className: "",
  modalStyle: {},
  backdropStyle: {}
}

class Modal extends Component {
  constructor(props){
    super();
    this.state = {
        show: false,
        animation: false
    };
  }
  
  setShow(value){
    this.setState({
      animation: this.state.animation,
      show: value
    });
  }

  setAnimation(value){
    this.setState({
      animation: value,
      show: this.state.show});
  }

  renderModal () {
    this.setShow(true);
    setTimeout(() => {
      this.setAnimation(true);
    }, this.props.delay);
  };
  
  closeModal() {
    this.setAnimation(false);
    setTimeout(() => {
      this.setShow(false);
    }, this.props.delay);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if(!this.props.isOpen && nextProps.isOpen){
      // when user click on button to open a modal.
      this.renderModal();
      return false;
    }    
    else if(this.props.isOpen && !nextProps.isOpen){
      // when use click on close button.
      this.closeModal();
      return false;
    }
    
    return true;
    
  }

  render() {
    const body = this.props.children || <ModalBody 
                                header={this.props.header} 
                                footer={this.props.footer} 
                                content={this.props.content} 
                                hideCallback={this.props.closeHandler} 
                                showCloseButton={this.props.showCloseButton}
                                showTopBorder={this.props.showTopBorder}
                                
                                />;
    return (
      <ModalTemplate
        show={this.state.show}
        hideCallback= {this.props.closeHandler}
        withAnimation={this.props.withAnimation}
        startAnimation= {this.state.animation}
        className={this.props.className}
        modalStyle={this.props.modalStyle}
        backdropStyle={this.props.backdropStyle}
      >
        {body}
      </ModalTemplate>
    )
  }

  componentDidMount(){
    if(this.props.isOpen) {
      this.renderModal();
    }
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal
