import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend8_Pontos_de_dragado extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }
    componentDidMount() {
        this.setState({collapse:this.props.defaultOpened});
        this.setState({arrowClass: 'fa fa-caret-right'})
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler = (name,event) => {        
        this.props._onChangeHandler(name,this.props.parentScope,event.target.checked)
    }

    render () {
        return (
            <div>
                <div className='mapbox_control-panel_subtitle'>
                    <span style={{'width':'17px',height:'15px',paddingTop:'10px'}}>
                        <img src={require('images/legend-icons/map08_1.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin-top':'8px','padding':0}} />
                    </span>
                    <FormattedMessage id="legend8.title" defaultMessage="no pressure or threat known">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </div>
            </div>
        )
    }
}

export default Legend8_Pontos_de_dragado;