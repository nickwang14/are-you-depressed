import React from 'react';
import {connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressSlider = ({progress = 0}) => <LinearProgress aria-label="Progress" variant="determinate" value={progress}/>
//<LinearProgress  value={progress} />
const mapStateToProps = (state, props) => {
  const progress = state.home.question/21*100
  console.warn(progress)
  return {...state,...props, progress};
};

export default connect(mapStateToProps)(ProgressSlider);