import React, {Component} from 'react';
import {connect} from "react-redux";

// Material UI Imports

import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';

// Local Storage Operations
import {getLocalSettings,setLocalSettings} from "../services/settingsOperations";

// Action Imports
import {setSettings} from "../actions/settings-actions";

class DarkModeToggle extends Component {
  handleDarkModeToggle = () =>{
      // redux
      if (this.props.settings.palette.type==='dark')
          this.props.setSettings({...this.props.settings,palette:{...this.props.settings.palette,type:'light'}});
      else this.props.setSettings({...this.props.settings,palette:{...this.props.settings.palette,type:'dark'}});
      // local-storage
      let settings = getLocalSettings();
      if (settings!==null && settings!==undefined) {
          if (settings.palette.type === 'dark')
              settings.palette.type = 'light';
          else settings.palette.type = 'dark';
          setLocalSettings(settings);
      }
  };

  render() {
      const { classes } = this.props;

      return (
        <div style={{padding:"10px"}}>
        <Typography variant="body1" gutterBottom>
            {"Dark Mode"}
        </Typography>
        <Divider />
        <div style={{textAlign:"center"}}>
            <Switch
                checked={this.props.settings.palette.type==='dark'}
                onChange={this.handleDarkModeToggle}
                value="checkedA"
            />
        </div>
        </div>
      )}
}


const mapStateToProps = (state, props) => {
  return {...state,...props};
};

const mapDispatchToProps = {
  setSettings,
};

export default connect(mapStateToProps,mapDispatchToProps)(DarkModeToggle)