import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

let checked = true;
class Legend2_Territorios_Indigenas extends Component {

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
        this.setState({arrowClass: 'fa fa-caret-down'})
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
        if (!checked) {
            checked = true;
        } else {
            checked = false;
        }

        event.target.checked = checked;
        this.props._onChangeHandler(name,this.props.parentScope,checked)
    }

    render () {
        return (
        <div>
            <input type="checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'tindigenas')} />
            <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend2.title" defaultMessage="Indigenous Territories">
                {(txt) => (txt)}
                </FormattedMessage>
                <span className={this.state.arrowClass} onClick={this.toggle}></span>
            </label>
            <Collapse isOpened={this.state.collapse}>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingTop:'10px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_0.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item1" defaultMessage="no pressure or threat known">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_1.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item2" defaultMessage="1 pressure/threat">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_2.png')} alt='ico_circle-11_inactive2' title='ico_circle-11_inactive2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item3" defaultMessage="2 pressures/threats">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_3.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item4" defaultMessage="3 pressures/threats">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_4.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item5" defaultMessage="4 pressures/threats">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_5.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item6" defaultMessage="5 pressures/threats">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingLeft:'15px'}}><img src={require('images/legend-icons/ico_square_6.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':'6px','padding':0}} /></span><FormattedMessage id="legend2.item7" defaultMessage="6 pressures/threats">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
            </Collapse>
        </div>
        )
    }
}

export default Legend2_Territorios_Indigenas;