import React from 'react'

import cssobj from '@/css/evaluation.scss'

export default class Evaluation extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return <div className={cssobj.App}>
            <div className="container">

                <div className="row clearfix">
                    <div className="col-md-12 column">

                        <div className={cssobj.pageHeader}>
                            <h1>FanPC</h1>
                        </div>

                        <div className={cssobj.jumbotron2}>
                            <h1>硬件测评</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                            <p>
                                <a className="btn btn-primary btn-large" href="#">Learn more</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}