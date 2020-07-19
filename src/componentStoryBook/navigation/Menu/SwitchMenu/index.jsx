import React from 'react'
import SwitchMenu from './SwitchMenu'
class Index extends React.Component{
    render(){
        const {mode,theme,disabled,t} = this.props
        return(
            <SwitchMenu
            mode={mode}
            theme={theme}
            disabled={disabled}
            t={t}
            />
        )
    }
}
export default Index