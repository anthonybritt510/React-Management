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

class App extends React.Component {
  
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  
  constructor(props) {
    super(props);
  }

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
          { this.state.customers ? this.state.customers.map(c => <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) : <p>Loading...</p> }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
