import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend14_Carretera_Planificada extends Component {

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
        if (this.props.defaultOpened == true) { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        } else {
            this.setState({arrowClass: 'fa fa-caret-right'})
        }
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
            <div className='mapbox_control-panel_subtitle' style={{paddingTop:'3px'}}>
                <input type="checkbox" className="mapbox_custom-checkbox-colored_legend_14" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'linha-viaplanejada-tipnis')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                    <FormattedMessage id="legend14.title" defaultMessage="national">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </label>
            </div>
        )
    }
}

export default Legend14_Carretera_Planificada;