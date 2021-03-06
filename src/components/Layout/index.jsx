import React from 'react';
import Aux from '../../hoc/AuxWrap';
import classes from './Layout.css';

const layout = props => (
  <Aux>
    <div>toolbar, sidedrawer backdero</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
