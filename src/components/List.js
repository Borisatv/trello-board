import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from './Card';
import InputContainer from './InputContainer';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1)
    },
}));
export default function List(){
    const classes = useStyle();
    return(
        <div>
            <Paper className={classes.root}>
                <Title />
                <Card />
                <Card />
                <Card />
                <Card />
                <InputContainer />
            </Paper>
        </div>
    );
}