import React, { Component } from 'react';
import './Recomend.scss';
import Skeleton from 'react-loading-skeleton';

 class Recomend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            songlist: [],
            newlist:[]
          };
    }
    render() {
        return (
            <div>
                <h3 className="songTitle"><span>推荐歌单</span></h3>
                <div className="relist">
                        {
                            this.state.loading?<div><Skeleton duration={2} count={4}/></div>:null
                        }
                    <ul>
                        {
                            this.state.songlist.map((item,i)=>
                             (
                                 <li key={i}>
                                     <span className="songamout">{item.songamout}</span>
                                    <img src={item.imgsrc} alt=""/>
                                    <p>{item.detal}</p>
                                </li>)
                            )
                            
                        }
                       
                    </ul>
                </div>
                <h3 className="songTitle"><span>最新音乐</span></h3>   
                <div className="songlist">
                    <ul>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>
                        <li>
                            <div className="songleft">
                                <div>怪咖</div>
                                <p>薛之谦</p>
                            </div>
                            <div className="playIcon">
                                <span className="play"></span></div> 
                        </li>                                                                                                                                                
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
         
        this.timer = setTimeout(()=>{
            this.setState({
                loading:false
            })
            this.setState({
                songlist:[
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/HvplBcZO34-tUjhLDaKQAQ==/109951163388630154.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'仲夏梦幻曲 | 你的名字是眼睛上的吻'
                    },
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/4YH5P_Xmiv7XWYtbn_Bbvw==/109951163386638439.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'「古风」茶凉可续，人走难忆'
                    },
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/O7ooEj8pH9-7f6pJXks60A==/18774161046484366.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'原谅我长相平凡至极，没能让你一眼着迷'
                    },
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/HI1DahvFYpA2wZa9FR-J3g==/18653214767309774.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'人从未完整过 只是碎片的拼合'
                    },
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/lFuEXAaUzuNTMF8Z7DNMxw==/19186477905294909.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'耳朵喜欢你 好听到可以单曲循环'
                    },
                    {
                        songamout:'76.5万',
                        imgsrc:'http://p1.music.126.net/_Ri36JpsgJ7an3r15yR-pg==/109951163385343130.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
                        detal:'2018年六月最热新歌TOP50'
                    }                                       

                ]
            })
        },1000);
        // setTimeout(()=>{
        //     this.state.newlist=[{
              
        //     }]
        // },400)
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }

}

export default Recomend
