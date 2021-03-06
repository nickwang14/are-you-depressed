import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import inventory from '../consts/inventoryConst';
import {setPoints} from '../actions/home-actions';

const Questions = ({home, setPoints}) => {
  const index = home.points.length
  return <div style={{
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    }}>
    <Button
      style={{justifyContent: "flex-start",  textAlign: 'left'}}
      onClick={
        ()=>{setPoints(0);}
    }>
      {
        inventory[index][0]
      }
    </Button>

    <Button
      style={{justifyContent: "flex-start",  textAlign: 'left'}}
      color='secondary'
      onClick={
        ()=>{setPoints(1);}
    }>
      {
        inventory[index][1]
      }
    </Button>

    <Button
      style={{justifyContent: "flex-start",  textAlign: 'left'}}
      onClick={
        ()=>{setPoints(2);}
    }>
      {
        inventory[index][2]
      }
    </Button>

    <Button
      style={{justifyContent: "flex-start",  textAlign: 'left'}}
      color='secondary'
      onClick={
        ()=>{setPoints(3);}
    }>
      {
        inventory[index][3]
      }
    </Button>
  </div>
}

const mapStateToProps = (state, props) => {
  return {...state,...props};
};

const mapDispatchToProps = {
  setPoints,
};

export default connect(mapStateToProps,mapDispatchToProps)(Questions);