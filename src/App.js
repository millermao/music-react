import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import './App.scss';
import * as actionCreators from './action/userInfo';
import axios from 'axios';
import Header from 'components/Header/header';
import Navtab from 'components/Navtab/Navtab';
import Loadable from 'react-loadable';

import {
  Route,
  Switch
} from 'react-router-dom'

const Loading = (props) => {
  console.log(props)
  if(props.pastDelay){
    return <div style={{color:'red'}}>Loading...</div>
  }else{
    return null
  }

};

const Recomend = Loadable({
  loader: () => import('pages/Recomend/Recomend'),
  loading: Loading,
  delay: 300,
});
const Hotrate = Loadable({
  loader: () => import('pages/HotRate/Hotrate'),
  loading: Loading,
  delay: 300,
});
const Search = Loadable({
  loader:()=>import('pages/search/search'),
  loading:Loading,
  delay:300
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navtab/>
        {/* <div>初始化{this.props.count}</div>
        <button onClick={this.increase.bind(this)}>增加</button>
        <button onClick={this.decrease.bind(this)}>减少</button> */}
        <Switch>
          <Route exact path="/" component={Recomend}/>
          <Route path="/HotRate" component={Hotrate}/>
          <Route path="/Search" component={Search}/>
        </Switch>
      </div>
    );
  }
  componentDidMount(){
    
    axios.get('/weapi/personalized/newsong').then((res)=>{
        console.log(res)
    })
  }
  increase(){
    this.props.counterAction.increment();
  }
  decrease(){
    this.props.counterAction.decrement();
  }
}


// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     count: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     counterAction: bindActionCreators(actionCreators,dispatch)
//   };
// }

export default App;
