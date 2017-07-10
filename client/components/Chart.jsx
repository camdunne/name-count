import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 1000,
    };
    this.chart = null;
  }
  render() {
    const { width, height } = this.state;
    return (
      <div id="wrapper">
        <HorizontalBar
          data={this.props.data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
          }}
          width={width}
          height={height}
        />
      </div>
    );
  }
}
Chart.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
export default Chart;
