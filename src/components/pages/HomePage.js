import React, {Component} from 'react';
import {connect} from 'react-redux';
import Questions from '../Questions'
import Results from '../Results'
import ProgressSlider from '../ProgressSlider'


// Material UI Imports
import ArrowCircleLeftIcon from '@material-ui/icons/ArrowLeft';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

// Action Imports
import {removePoints, reset} from '../../actions/home-actions';

class HomePage extends Component {
    render() {
        console.warn(this.props.home.points)
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh'}}
                >
                    <Paper
                     style={{ 
                         padding: '20px',
                         textAlign: 'center',
                         minWidth: '58vw'
                        }}
                    >
                    <Typography variant="display2" color="primary">
                        {this.props.showQuestions ? "Are You Depressed?" : "Results"}
                    </Typography>

                    { 
                        this.props.showQuestions && (
                        <Typography color='secondary' gutterBottom style={{padding:"10px"}}>
                            {"Pick from the options below. When finished, a score will be displayed with your mood level."}
                        </Typography>
                        )
                    }

                    <Typography variant="h5" gutterBottom style={{display: "flex", justifyContent: 'flex-start', alignItems: "left", padding:"10px"}}>
                        {this.props.showQuestions ? <Questions/> : <Results/>}
                    </Typography>

                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                    {
                        this.props.showQuestions ? (
                            <Fab 
                            color="primary"
                            style={{marginRight: '40vw'}}
                            disabled={this.props.firstQuestion}
                            onClick={
                                ()=>{ this.props.removePoints(); }
                            }>
                                <ArrowCircleLeftIcon/>
                            </Fab>
                        ) : (
                            <Button
                            variant='contained' 
                            color="primary" 
                            size='large'
                            style={{marginRight: '40vw'}} 
                                onClick={
                                ()=>{this.props.reset();}
                            }>
                                Try again
                            </Button>
                        )
                    }
                    
                    <Button 
                    variant='contained' 
                    color="primary" 
                    size='large'
                    href='https://findahelpline.com/i/iasp'>
                        Get help
                    </Button>
                    </div>
                    </Paper>
                </Grid>
                <ProgressSlider/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const showQuestions = state.home.question < 21
    const firstQuestion = state.home.question === 0
    return {...state,...props, showQuestions, firstQuestion};
};

const mapDispatchToProps = {
    removePoints,
    reset,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);