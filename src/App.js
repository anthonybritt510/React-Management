import React from 'react';
import Customer from './components/Customer';
import './App.css';

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
    return (
      <div>
        {
          customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          })
        }
      </div>
    )
  }
}

export default App;
