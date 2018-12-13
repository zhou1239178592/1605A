import React from 'react';
import styles from './PlayHeader.scss';

export default props=>{
  console.log(props,"zaijain")
  return <React.Fragment>
    <h2>{props.name}</h2>
    <img className={props.isPlay?styles.picUrl:styles.disable} src={props.picUrl}/>
  </React.Fragment>
}
