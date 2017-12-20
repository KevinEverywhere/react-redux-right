import React from 'react';
import BuildView from '../BuildView';

const buildViews = props => {
  const viewItemsDivs = Object.keys(props.viewItems)
    .map(viewKey => {
      return [...Array(props.viewItems[viewKey])].map((_, i) => {
        return <BuildView key={viewKey + i} type={viewKey} />
      });
 }).reduce((arr, el)=>{
   return arr.concat(el)
 }, []);
 return viewItemsDivs;
}

export default buildViews;
