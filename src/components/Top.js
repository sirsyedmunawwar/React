import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import Article from './Article'
import content from "./content.json"

class Top extends Component{
    state={
        art:content
    }
    render(){
        return(
            <>
              <Article updater={this.state.art} />

            </>
        )
    }
}
export default Top;