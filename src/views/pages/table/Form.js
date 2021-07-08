/*
import React, { Component } from 'react'
import Form from './Form'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
    }

    this.addPerson = this.addPerson.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
  }

  addPerson(name, email) {
    this.setState((prevState) => ({
      people: [...prevState.people, { name, email }],
    }))
  }

  componentDidMount() {
    this.getPeople()
  }

  getPeople() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => this.setState({ people: response }))
      .catch((error) => console.log(error))
  }

  deletePerson(email) {
    return () => {
      this.setState((prevState) => ({
        people: prevState.people.filter((person) => person.email !== email),
      }))
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <table>
          <thead>
            <tr>
              <th>LP</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>
                    <button onClick={this.deletePerson(person.email)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Table

/*
import Sidebar from '../../../components/SideBarD'
import Header from '../../../components/Header'
import React, { Component, lazy } from 'react'
import { CButton } from '@coreui/react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'

//import GetRestObject from '../../../api/ConnectServerGet'

class dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /*
  GetRequestedDetails = () => {
    GetRestObject.GetRestRequest(`/api/users`, (getResultObj) => {
      console.log(getResultObj)
    })
  }
  componentDidMount = () => {
    this.GetRequestedDetails()
    //this.PostRequestedDetails()
  }


  render() {
    return (
      <>
        <div>
          <Sidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Header />
            <MDBTable scrollY>
              <MDBTableHead columns={data.columns} />
              <MDBTableBody rows={data.rows} />
            </MDBTable>
            <div className="col-right">
              <CButton type="submit" className="mb-3">
                Confirm identity
              </CButton>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const data = {
  columns: [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
    },
    {
      label: 'Amount',
      field: 'amount',
      sort: 'asc',
    },
    {
      label: 'Total',
      field: 'total',
      sort: 'asc',
    },
  ],
  rows: [
    {
      name: 'Anthracite Coal',
      amount: <input type="text" className="form-control" id="AntCoal" />,
      total: '300',
    },
    {
      name: 'Bituminous Coal',
      amount: <input type="text" className="form-control" id="formGroupExampleInput" />,
      total: '100',
    },
    {
      name: 'Subbituminous Coal',
      amount: <input type="text" className="form-control" id="formGroupExampleInput" />,
      total: '200',
    },
    {
      name: 'Lignite Coal',
      amount: <input type="text" className="form-control" id="formGroupExampleInput" />,
      total: '400',
    },
  ],
}
export default dashboard
*/
/*

import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(event) {
    event.preventDefault()
    const form = event.target
    const email = form.elements['email'].value
    const name = form.elements['name'].value
    this.props.addPerson(name, email)
    form.reset()
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input id="name" type="text" defaultValue="" placeholder="Name..." />
        <input id="email" type="text" defaultValue="" placeholder="Email..." />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Form
*/
