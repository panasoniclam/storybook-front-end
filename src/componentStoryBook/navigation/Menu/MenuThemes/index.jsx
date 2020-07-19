import React from 'react'
import MenuThemes from './MenuThemes'


class Index extends React.Component{
    render(){
        const {onClick,Dark,Light} = this.props
        return(
            <MenuThemes
            onClick={onClick}
            Dark={Dark}
            Light={Light}
            
            />
        )
    }
}
export default Index