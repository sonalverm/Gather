import React, { Component } from 'react';
import CardList from './Card';
import {Filter} from './Filter';

/*const testData = [
  {name: "Dan Abramov", title: "Harry Potter books available", category: "Books", description: "test description", type: "giving", email: "abc@xyz.com"},
  {name: "Sophie Alpert", title: "Plasma Donation", category: "Blood donation", description: "test description2", type: "giving2", email: "def@xyz.com"},
  {name: "Sebastian Markbåge", title: "Meetup", category: "Others", description: "test description3 balh blah ijweihroawhetgabgoubr awohoighwg gaohroigha4 gaorigoi4h gaoihrgh4jang  aoirnoiutrnnab gaojfi gatijanf aijtirumf aijfmf ai", type: "giving3", email: "pqr@xyz.com"},
];*/

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { 
      posts: [], 
      loading: true };
  }

  componentDidMount() {
    this.populatePostsData();
  }

  static renderPostCards(posts) {
    return (
      <div class="row">
        <div class="col-md-8">
          <CardList data={posts}></CardList>
        </div>
        <div class="col-md-4">
            <Filter></Filter>
        </div>          
      </div>
    );
  }

  render() {
    return(
      <div class="row">
        <div class="col-md-8">
          <CardList data={this.state.posts}></CardList>
        </div>
        <div class="col-md-4">
            <Filter></Filter>
        </div>          
      </div>
     );
    
    // let contents = this.state.loading
    //   ? <p><em>Loading...</em></p>
    //   : FetchData.renderPostCards(this.state.posts);

    // return (
    //   <div>
    //     <h1 id="tabelLabel" >Explore</h1>
    //     <p>This is a place to gather and exchange!</p>
    //     {contents}
    //   </div>
    // );
  }

    async populatePostsData() {
      var postdata = [];
      const response = await fetch('/postdetails', { mode: 'no-cors' }).then(function (res) {
          console.log(res);
          return res.json();
      }).then(function (data) {
          console.log(data);
          postdata = data;          
      }).catch((error) => {
          console.log(error);
      });
      this.setState({ posts: postdata, loading: false });
  }
}
