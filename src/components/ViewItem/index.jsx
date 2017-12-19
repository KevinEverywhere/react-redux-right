import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/AuxWrap';
import classes from './ViewItem.css';

class ViewItem extends Component{
  render(){
    let item = null;
    switch (this.props.type) {
      case 'Audio':
        item = <div className={classes.Audio}>Audio</div>
        break;
      case 'Video':
        item = <div className={classes.Video}>Video</div>
        break;
      case 'Html':
        item = <div className={classes.Html}>Html</div>
        break;
      case 'Image':
        item = <div className={classes.Image}>Image</div>
        break;
      default:
        break;
    }
    return <Aux>{item}</Aux>;
  }
}

ViewItem.propTypes = {
  type: PropTypes.string.isRequired
}

export default ViewItem;
