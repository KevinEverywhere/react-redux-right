import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/AuxWrap';
import classes from './BuildView.css';

class BuildView extends Component{
  render(){
    let item = null;
    switch (this.props.type) {
      case 'Audio':
        item = <div className={classes.BuildAudio}>Build Audio</div>
        break;
      case 'Video':
        item = <div className={classes.BuildVideo}>Build Video</div>
        break;
      case 'Html':
        item = <div className={classes.BuildHtml}>Build Html</div>
        break;
      case 'Image':
        item = <div className={classes.BuildImage}>Build Image</div>
        break;
      default:
        break;
    }
    return <Aux>
    <div className={classes.BuildView}>
      <div className={classes.Less}>Less</div>
      <div className={classes.More}>More</div>
      {item}
    </div>
    </Aux>;
  }
}

BuildView.propTypes = {
  type: PropTypes.string.isRequired
}

export default BuildView;


/**
 *   const viewItemsDivs = Object.keys(props.viewItems)
   .map(viewKey => {
     return [...Array(props.viewItems[viewKey])].map((_, i) => {
       return <ViewItem key={viewKey + i} type={viewKey} />
     });
   }).reduce((arr, el)=>{
     return arr.concat(el)
   }, []);
   return viewItemsDivs;
   import React, { Component } from 'react';
   import PropTypes from 'prop-types';
   import Aux from '../../../hoc/AuxWrap';
   import classes from '../Viewer.css';

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
       return item;
     }
   }

   ViewItem.propTypes = {
     type: PropTypes.string.isRequired
   }

   export default ViewItem;

 */
