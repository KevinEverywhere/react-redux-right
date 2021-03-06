import React, { Component } from 'react';
import Aux from '../../hoc/AuxWrap';
import Viewer from '../../components/Viewer';

class Gallery extends Component {
  state = {
    viewItems:{
      Audio: 3,
      Video: 1,
      Html: 2,
      Image: 5
    }
  }
  render() {
    return(
      <Aux>
        <Viewer viewItems={this.state.viewItems} />
      </Aux>
    );
  }
}

export default Gallery;
