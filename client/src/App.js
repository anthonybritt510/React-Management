import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';

import Customer from './components/Customer';
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Jovan Markovic',
  'birthday': '1988-08-09',
  'gender': 'Male',
  'job': 'Senior Web Developer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Priyanka Hinal',
  'birthday': '1988-08-09',
  'gender': 'Female',
  'job': 'Team Manager'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Rakesh Maxim',
  'birthday': '1988-08-09',
  'gender': 'Male',
  'job': 'Senior Web Developer'
},
{
  'id': 4,
  'image': 'https://placeimg.com/64/64/4',
  'name': 'Jacek Betal',
  'birthday': '1988-08-09',
  'gender': 'Male',
  'job': 'Designer'
}]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(c => <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
