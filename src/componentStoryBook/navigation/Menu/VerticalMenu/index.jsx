import React from 'react'
import VericalMenu from './VerticalMenu'
class Index  extends React.Component{
   
    render(){ 
        const {onClick} = this.props
        return(
            <VericalMenu
            onClick={onClick}
            />
        )
    }
}
export default Index