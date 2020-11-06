import React, { Component } from 'react';
import CardList from './Card';
import Search from './Search';
import { authProvider } from '../auth/authProvider';

const testData = [
  {name: "Dan Abramov", title: "Harry Potter books available", category: "Books", description: "test description", type: "giving", email: "abc@xyz.com"},
  {name: "Sophie Alpert", title: "Plasma Donation", category: "Blood donation", description: "test description2", type: "giving2", email: "def@xyz.com"},
  {name: "Sebastian Markbåge", title: "Meetup", category: "Others", description: "test description3 balh blah ijweihroawhetgabgoubr awohoighwg gaohroigha4 gaorigoi4h gaoihrgh4jang  aoirnoiutrnnab gaojfi gatijanf aijtirumf aijfmf ai", type: "giving3", email: "pqr@xyz.com"},
];

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { 
      posts: testData, 
      loading: true };
  }

  async componentDidMount() {
    //await authProvider.getAccessToken().then(res => this.setState({ token: res.accessToken }));
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    return(
      <div class="row">
        <div class="col-md-8">
          <CardList data={this.state.posts}></CardList>
        </div>
        <div class="col-md-4">
          <Search></Search>
        </div>          
      </div>
     );
    
    // let contents = this.state.loading
    //   ? <p><em>Loading...</em></p>
    //   : FetchData.renderForecastsTable(this.state.forecasts);

    // return (
    //   <div>
    //     <h1 id="tabelLabel" >Explore</h1>
    //     <p>This is a place to gather and exchange!</p>
    //     {contents}
    //   </div>
    // );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
