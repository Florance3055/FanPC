import React from 'react'

import cssobj from '@/css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'



export default class Index extends React.Component {
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

                            <div className={cssobj.pageHeader}>
                                <h1>FanPC</h1>
                            </div>


     


                            <div className={cssobj.jumbotron2}>
                                <h1>Hello, world!</h1>
                                <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                                <p>
                                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>


                            <div className={cssobj.imgs}>
                                <div className={cssobj.box}>
                                    <h1 className={cssobj.imgtext}><span>硬件测评</span></h1>
                                </div>
                                <div className={cssobj.box}>
                                    <h1 className={cssobj.imgtext}><span>硬件常识</span></h1>
                                </div>
                                <div className={cssobj.box}>
                                    <h1 className={cssobj.imgtext}><span>软件维护</span></h1>
                                </div>
                                <div className={cssobj.box}>
                                    <h1 className={cssobj.imgtext}><span>软件技巧</span></h1>
                                </div>
                            </div>

                            <div className={cssobj.jumbotron2}>
                                <h1>软件技巧</h1>
                                <p>
                                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>

                            <div className={cssobj.jumbotron2}>
                                <h1>软件维护</h1>
                                <p>
                                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>

                            <div className={cssobj.jumbotron2}>
                                <h1>硬件常识</h1>
                                <p>
                                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>

                            <div className={cssobj.jumbotron2}>
                                <h1>硬件测评</h1>
                                <p>
                                    <a className="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}