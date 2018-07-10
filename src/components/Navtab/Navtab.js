import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navtab.scss'

class Navtab extends Component{
    render(){
       return(
          <div className="tabBox">
            <NavLink exact to="/" activeClassName="selected">推荐音乐</NavLink>
            <NavLink to="/HotRate" activeClassName="selected">热歌榜</NavLink>
            <NavLink to="/Search" activeClassName="selected">搜索</NavLink>
          </div> 
       ) 
    }
}

export default Navtab