import React, {Component} from 'react';
import {connect} from 'react-redux';
import Questions from '../Questions'
import Results from '../Results'
import ProgressSlider from '../ProgressSlider'


// Material UI Imports
import ArrowCircleLeftIcon from '@material-ui/icons/ArrowLeft';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
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
                    style={{ minHeight: '90vh' }}
                >
                    <Typography variant="display2" color="primary">
                        {this.props.showQuestions ? "Are You Depressed?" : "Results"}
                    </Typography>

                    { 
                        this.props.showQuestions && (
                        <Typography color='secondary' gutterBottom style={{padding:"10px"}}>
                            {"Answer questions from psychologists to gauge where your head is at"}
                        </Typography>
                        )
                    }

                    <Typography variant="h5" gutterBottom style={{display: "flex", justifyContent: 'center', alignItems: "center", padding:"10px", marginRight: '53px'}}>
                        {this.props.showQuestions ? <Questions/> : <Results/>}
                    </Typography>

                    <div>
                    {
                        this.props.showQuestions ? (
                            <Fab 
                            color="primary"
                            style={{marginRight: '40vw'}}
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
                </Grid>
                <ProgressSlider/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const showQuestions = state.home.question < 21
    return {...state,...props, showQuestions};
};

const mapDispatchToProps = {
    removePoints,
    reset,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);