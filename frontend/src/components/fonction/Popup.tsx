import React from 'react';
import Popup from 'react-popup';

/** The prompt content component */
export class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };

    this.onChange = (e) => this._onChange(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  _onChange(e) {
    let value = e.target.value;

    this.setState({ value: value });
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        className="mm-popup__input"
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

/** Prompt plugin */
export const prompt = (defaultValue, placeholder, callback) => {
  let promptValue = null;
  let promptChange = function (value) {
    promptValue = value;
  };

  Popup.create({
    title: "What's your name?",
    content: <Prompt onChange={promptChange} placeholder={placeholder} defaultValue={defaultValue} />,
    buttons: {
      left: ['cancel'],
      right: [
        {
          text: 'Save',
          key: '⌘+s',
          className: 'success',
          action: function () {
            callback(promptValue);
            Popup.close();
          },
        },
      ],
    },
  });
};

export default Popup;
