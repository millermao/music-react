import React, { Component } from 'react';
import './Hotrate.scss'

 class Hotrate extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div className="formbox">
                <div className="formgroup">
                    <label></label>
                    <input placeholder="请输入用户名" type="text"/>
                </div>
                <ul className="inforBox">
                    <li>我的订单</li>
                </ul>
                <div className="telBox">
                    <input placeholder="请输入您的手机好吗" type="tel"/>
                </div>
            </div>
        )
    }
}

export default Hotrate
