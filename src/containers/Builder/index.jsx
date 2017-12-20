import React, { Component } from 'react';
import Aux from '../../hoc/AuxWrap';
import BuildViews from  '../../components/BuildViews';

class Builder extends Component {
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
        <BuildViews viewItems={this.state.viewItems} />
      </Aux>
    );
  }
}

export default Builder;
