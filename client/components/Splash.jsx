import React, { Component } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Chart from '../components/Chart';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      data: null,
      title: '',
      value: '',
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/macbeth')
      .then(({ data }) => {
        const { title, k, v } = data;
        this.setState({
          fetched: true,
          data: {
            labels: k,
            datasets: [{
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: v,
            }],
          },
          title,
        });
      })
      .catch((err) => { console.error(err); });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (/.*\.xml$/.test(this.state.value)) {
      axios.post('/api/xml', { xmlfile: this.state.value })
        .then(({ data }) => {
          this.setState({
            error: null,
            data: data.data,
            title: data.title,
          });
        })
        .catch((err) => { console.error(err); });
    } else {
      this.setState({
        error: 'Not a valid XML file.',
      });
    }
  }
  render() {
    if (!this.state.fetched) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <Form
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <center>{(this.state.error) ? this.state.error : ''}</center>
        <h1>{this.state.title}</h1>
        <Chart data={this.state.data} />
      </div>
    );
  }
}


export default Splash;
