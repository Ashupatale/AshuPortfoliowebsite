import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export class Exprience extends Component {
    render() {
        return (
            <div>
        
<Grid>
<Cell col={4}>
<p>Jan {this.props.startMonth} -Mar{this.props.endMonth}</p>

</Cell>

<Cell col={8}>
    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
    <h4> 1.CodeElectra pvt.ltd (6 months)</h4>&<h4>2.SKPElive Webmedia (6 months)</h4>
    <p>{this.props.jobDescription}</p>
</Cell>
</Grid>

               

            </div>
        )
    }
}

export default Exprience
