import React from 'react';
import classes from './Viewer.css';
import ViewItem from '../ViewItem';

const viewer = props => {
  const viewItemsDivs = Object.keys(props.viewItems)
  .map(viewKey => {
    return [...Array(props.viewItems[viewKey])].map((_, i) => {
      return <ViewItem key={viewKey + i} type={viewKey} />
    });
  }).reduce((arr, el)=>{
    return arr.concat(el)
  }, []);
  return viewItemsDivs;
}

export default viewer;
