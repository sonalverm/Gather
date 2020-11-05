import * as React from 'react';

const CardList = (props) =>(
  <div>
    {props.data.map(profile => <Cards {...profile}/>)}
  </div>
);

export class Cards extends React.Component {
    render() {
      const cardData = this.props;
      return (
        <div class="card">
        <div class="card-body">
         <h5 class="card-title">{cardData.title}</h5>
         <h6 class="card-subtitle mb-2 text-muted"><span class="badge badge-secondary">{cardData.status}</span>  {cardData.category}</h6>
         <p class="card-text">{cardData.description}</p>
         <a href="#" class="card-link">{cardData.name}</a>
         <a href="#" class="card-link">{cardData.email}</a>
        </div>
        </div>
      );
    }
};

export default CardList;



