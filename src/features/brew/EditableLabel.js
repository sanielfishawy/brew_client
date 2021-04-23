import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditLabel.module.css'

const ENTER_KEY_CODE = 13;
const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

 export default class EditableLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	isEditing: this.props.isEditing || false,
			    value: this.props.value || "",
        };
    }

    componentDidUpdate(prevProps) {
      if(prevProps.value !== this.props.value) {
          this.setState({
            value: this.props.value || "",
        });
      }

      if(prevProps.isEditing !== this.props.isEditing) {
        this.setState({
          isEditing: this.state.isEditing || this.props.isEditing || false
      });
      }
    }
    
    isTextValueValid = () => {
        return (
            typeof this.state.value != "undefined" && 
            (
                typeof this.state.value == "number" ||
                this.state.value.trim().length > 0) 
            )  
    }
    
    handleFocus = () => {
        if(this.state.isEditing) {
            if(typeof this.props.onFocusOut === 'function') {
                this.props.onFocusOut(this.state.value);
            }
        }
        else {
            if(typeof this.props.onFocus === 'function') {
                this.props.onFocus(this.state.value);
            }
        }

        if(this.isTextValueValid()){
            this.setState({
                isEditing: !this.state.isEditing,
            });
        }else{
            if(this.state.isEditing){
                this.setState({
                    isEditing: this.props.emptyEdit || false
                });
            }else{
                this.setState({
                    isEditing: true
                });
            }
        }
    }
	
    handleChange = () => {
    	this.setState({
        	value: this.textInput.value,
        });
    }

    handleKeyDown = (e) => {
        if(e.keyCode === ENTER_KEY_CODE){
            this.handleEnterKey();
        }
    }

    handleEnterKey = () => {
        this.handleFocus();
    }

    render() {
    	if(this.state.isEditing) {
        	return <div>
        	    <input 
                    type={this.props.type || 'text'}
                    className={this.props.inputClassName}
                    ref={(input) => { this.textInput = input; }}
                    value={this.state.value} 
                    onChange={this.handleChange}
                    onBlur={this.handleFocus}
                    onKeyDown={this.handleKeyDown}
                    style={{ 
                    	width: this.props.inputWidth,
                        height: this.props.inputHeight,
                        fontSize: this.props.inputFontSize,
                        fontWeight: this.props.inputFontWeight,
                        borderWidth: this.props.inputBorderWidth,
               			
                    }}
                    maxLength={this.props.inputMaxLength}
                    placeholder={this.props.inputPlaceHolder}
                    tabIndex={this.props.inputTabIndex}
                    autoFocus/>
        	</div>
        }
        
        const labelText = this.isTextValueValid() ? this.state.value : (this.props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER);
        return <div>
            <label className={`${this.props.labelClassName || ''} ${styles.editLabel}`}
                onClick={this.handleFocus}
                style={{
                	fontSize: this.props.labelFontSize,
                    fontWeight: this.props.labelFontWeight,
                }}>
                {labelText}
            </label>
        </div>;
    }
}

EditableLabel.propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    isEditing: PropTypes.bool,
    emptyEdit: PropTypes.bool,

    labelClassName: PropTypes.string,
    labelFontSize: PropTypes.string,
    labelFontWeight: PropTypes.string,
    labelPlaceHolder: PropTypes.string,

    inputMaxLength: PropTypes.number,
    inputPlaceHolder: PropTypes.string,
    inputTabIndex: PropTypes.number,
    inputWidth: PropTypes.string,
    inputHeight: PropTypes.string,
    inputFontSize: PropTypes.string,
    inputFontWeight: PropTypes.string,
    inputClassName: PropTypes.string,
    inputBorderWidth: PropTypes.string,

    onFocus: PropTypes.func,
    onFocusOut: PropTypes.func
};