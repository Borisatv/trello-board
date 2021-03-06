import React, { useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    editableTitle: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus":{
            background: "#ddd"
        }
    },
}));
export default function Title(){
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    return(
        <div>
            {open? (
                <div>
                    <InputBase
                     autoFocus
                     value="Todo" 
                     inputProps={{
                         className: classes.input,
                     }}
                     fullWidth
                     onBlur={() => setOpen(!open)}
                    />
                </div>
            ) : (
                <div>
                    <Typography onClick={() => setOpen(!open)}
                    className={classes.editableTitle}>
                        Todo
                    </Typography>
                </div>
            )}
        </div>
    );
}