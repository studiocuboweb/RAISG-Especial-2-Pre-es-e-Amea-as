import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend7_Hidrovia_planificada extends Component {

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
                    <span style={{'width':'15px',height:'15px',paddingTop:'10px'}}>
                        <img src={require('images/legend-icons/map_06_4.gif')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin-top':'8px','padding':0}} />
                    </span>
                    <FormattedMessage id="legend7.title" defaultMessage="no pressure or threat known">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </div>
            </div>
        )
    }
}

export default Legend7_Hidrovia_planificada;