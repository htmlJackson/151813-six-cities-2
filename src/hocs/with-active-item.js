import React from 'react';
import PropTypes from 'prop-types';


const withActiveItem = (Component) => {

  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem || null
      };

      this.handleActivateItem = this.handleActivateItem.bind(this);
    }

    handleActivateItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActivateItem={this.handleActivateItem}
        />
      );
    }

  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any
  };

  return WithActiveItem;
};

export default withActiveItem;
