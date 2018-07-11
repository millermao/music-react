import React, { Component } from 'react';
import './search.scss'


 class Search extends Component {
     constructor(props){
         super(props);
        this.state={
            hotText:[]
        }
     }
    render() {
        return (
            <div>
                <div className="inputWrapper">
                    <div className="box">
                        <input onInput={this.serach.bind(this)} className="searchInput" placeholder="搜索歌曲、歌手、专辑" type="text"/>
                    </div>
                </div>
                <div className="titleBox">
                    <p className="hottitle">热门搜索</p>
                    <div className="hotseach">
                        {
                            this.state.hotText.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            hotText:['毛不易','E能量演出','镇魂','乐华七子NEXT','薛之谦','世界杯竞猜','陈奕迅','毕业季','RADWIMPS','E能量']
        })
        // this.setState.hotText=['毛不易','E能量演出','镇魂','乐华七子NEXT','薛之谦','世界杯竞猜','陈奕迅','毕业季','RADWIMPS','E能量']
    }
    serach(e){
        e.nativeEvent.stopImmediatePropagation()
        console.log(e.target.value);
        setTimeout(()=>{
            
        },200)

    }
}

export default Search
