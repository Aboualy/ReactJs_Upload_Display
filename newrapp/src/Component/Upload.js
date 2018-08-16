import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../logo.svg';
import AppGridList from "./AppGridList";
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : [ {_photos:[]}, ],
        };
    }

    setImages = (e) => {
        e.preventDefault();
        //this.setState({ images: [] }); // empty out current images array
        const _img = e.target.files;
        const len = _img.length;
        for(let i = 0; i < len; i++) {
            let reader = new FileReader();
            let file = _img[i];
            reader.onloadend = () => {

                let user = Object.assign({}, this.state.user);    //creating copy of object
                user[0]._photos = user[0]._photos.concat(reader.result) ;                        //updating value
                this.setState({user});

            }

            reader.readAsDataURL(file);
        }
    }


    render(){

        const  {_photos} = this.state.user[0];
        const { classes } = this.props;
        return(<div>
            <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
                onChange = {this.setImages}
            />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span" className={classes.button} >
                    Upload
                </Button>
            </label>

            <AppGridList _IMG ={_photos}/>
        </div>);
    }
}
export default withStyles(styles) (Upload);