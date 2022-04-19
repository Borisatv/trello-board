import React from 'react';
import { Paper, InputBase, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4)
    },
    btnConfirm: {
        background: "green",
        color: "#fff"
    }
}));
export default function InputCard({ setOpen }){
    const classes = useStyle();
    return(
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase 
                    multiline
                    fullWidth
                    placeholder='Enter a title of this card..'
                    />
                </Paper>
            </div>
            <div>
                <Button className={classes.btnConfirm} onClick={()=> setOpen(false)}>Add card</Button>
            </div>
        </div>
    );
}