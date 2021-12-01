import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

const Results = ({score}) => {
  return <div style={{display: 'flex', flexDirection: 'column', justifyContent: "flex-start"}}>
    <Typography variant="h4" gutterBottom style={{textAlign: 'left'}}>
      {`Score: ${score}`}
    </Typography>
    
    <Typography variant="p" gutterBottom style={{textAlign: 'left'}}>
      {"The highest possible total is 63."}
    </Typography>

    <Typography variant={"p"} color={score <=10 ? 'primary' : 'white'} style={{textAlign: 'left'}}>
      {"1-10 These ups and downs are considered normal"}
    </Typography>

    <Typography variant={"p"} color={score > 10 && score <= 16 ? 'primary': 'white'} style={{textAlign: 'left'}}>
      {"11-16 Mild mood disturbance"}
    </Typography>

    <Typography variant={"p"} color={score > 16 && score <= 20 ? 'primary': 'white'} style={{textAlign: 'left'}}>
      {"17-20 Borderline clinical depression"}
    </Typography>

    <Typography variant={"p"} color={score > 20 && score <= 30 ? 'primary': 'white'} style={{textAlign: 'left'}}>
      {"21-30 Moderate depression"}
    </Typography>

    <Typography variant={"p"} color={score > 30 && score <= 40 ? 'primary': 'white'} style={{textAlign: 'left'}}>
      {"31-40 Severe depression"}
    </Typography>
    
    <Typography  variant={"p"} color={score > 40 ? 'primary' : 'white'} style={{textAlign: 'left'}}>
      {"40+ Extreme depression"}
    </Typography>
  </div>
}

const mapStateToProps = (state, props) => {
  const score = state.home.points.reduce((previousValue, currentValue) => previousValue + currentValue)
  return {...state,...props, score};
};

export default connect(mapStateToProps)(Results);