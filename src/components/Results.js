import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

const Results = ({score}) => {
  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <Typography variant="h3" gutterBottom>
      {`Score: ${score}`}
    </Typography>
    
    <Typography variant="display1" gutterBottom>
      {"The highest possible total for the whole test would be 63."}
    </Typography>

    <Typography variant={"p"} color={score <=10 ? 'primary' : 'white'}>
      {"1-10 These ups and downs are considered normal"}
    </Typography>

    <Typography variant={"p"} color={score > 10 && score <= 16 ? 'primary': 'white'}>
      {"11-16 Mild mood disturbance"}
    </Typography>

    <Typography variant={"p"} color={score > 16 && score <= 20 ? 'primary': 'white'}>
      {"17-20 Borderline clinical depression"}
    </Typography>

    <Typography variant={"p"} color={score > 20 && score <= 30 ? 'primary': 'white'}>
      {"21-30 Moderate depression"}
    </Typography>

    <Typography variant={"p"} color={score > 30 && score <= 40 ? 'primary': 'white'}>
      {"31-40 Severe depression"}
    </Typography>
    
    <Typography  variant={"p"} color={score > 40 ? 'primary' : 'white'}>
      {"40+ Extreme depression"}
    </Typography>
  </div>
}

const mapStateToProps = (state, props) => {
  const score = state.home.points.reduce((previousValue, currentValue) => previousValue + currentValue)
  return {...state,...props, score};
};

export default connect(mapStateToProps)(Results);