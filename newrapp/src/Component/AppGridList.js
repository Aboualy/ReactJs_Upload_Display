import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Icon from "../../node_modules/@material-ui/core/Icon/Icon";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1005,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    leftIcon: {
        marginLeft: theme.spacing.unit,
    },
    rightIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    title: {
        height: '40',
    },




});


class AppGridList extends React.Component{

    render(){

        const { classes } = this.props;
        return(
                <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {this.props._IMG.map(img => (
                        <GridListTile key={img} cols={img.cols || 1}>
                            <img src={img} alt= "IMG" />
                            <GridListTileBar className="tile"

                                actionIcon={
                                    <div><
                                        Button variant="contained" color="secondary" aria-label="Add" className={classes.button}> <AddIcon /> </Button>

                                          <Button variant="contained" size="small" color="secondary"  aria-label="Edit" className={classes.leftIcon}>
                                            <Icon>edit_icon</Icon>
                                        </Button>
                                        <Button variant="contained" color="secondary" size = "small" className={classes.button}> Delete <DeleteIcon  className={classes.rightIcon} /> </Button>

                                        <IconButton className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>

                                    </div>
                            }
                            />

                                }
                            />

                                    </GridListTile>

                    ))}
                </GridList>

        </div>);


    }

}


export default withStyles(styles)(AppGridList);