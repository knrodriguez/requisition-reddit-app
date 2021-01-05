import React from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles, unstable_createMuiStrictModeTheme, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';


class RequisitionForm extends React.Component {

    useStyles() {
        return makeStyles((theme) => ({
            root: {
                '& .MuiTextField-root': {
                  margin: theme.spacing(1),
                  width: '25ch',
                },
            },  
            chips: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            chip: {
                margin: 2,
            },
        }))
    }

    createTheme () {
        return useTheme;
    }
    render(){
        // const classes = this.useStyles();
        // const names = [
        //     'Oliver Hansen',
        //     'Van Henry',
        //     'April Tucker',
        //     'Ralph Hubbard',
        //     'Omar Alexander',
        //     'Carlos Abbott',
        //     'Miriam Wagner',
        //     'Bradley Wilkerson',
        //     'Virginia Andrews',
        //     'Kelly Snyder',
        // ];
        // const theme = this.createTheme();
        // let [personName, setPersonName] = React.useState([]);

        // const handleChange = (event) => {
        //     setPersonName(event.target.value);
        // };

        // const handleChangeMultiple = (event) => {
        //     const { options } = event.target;
        //     const value = [];
        //     for (let i = 0, l = options.length; i < l; i += 1) {
        //         if (options[i].selected) {
        //             value.push(options[i].value);
        //         }
        //     }
        //     setPersonName(value);
        // };
        return(
            <div>
                {/* <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="searchString" label="Search Keywords" />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                        <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </form> */}
            </div>
        )
    }
}

export default RequisitionForm;