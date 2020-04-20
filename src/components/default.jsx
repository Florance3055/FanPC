import React from 'react'

import { Link } from 'react-router-dom';

import cssobj from '@/css/index.scss'


export default class Default extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {

        return <div>

            <div className={cssobj.App}>
                <div className="container">


                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button> <a className="navbar-brand" href="http://127.0.0.1:3015/">FanPC</a>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><Link to="/index" >index</Link></li>
                                        <li><Link to="/common">common</Link></li>
                                        <li><Link to="/evaluation">evaluation</Link></li>
                                        <li><Link to="/skill">skill</Link></li>
                                        <li><Link to="/protect">protect</Link></li>
                                        <li><Link to="/first">first</Link></li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    }
}