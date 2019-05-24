import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

let checked = true;
class RAISGPressoes2018_geral_escala2 extends Component {

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
                <FormattedMessage id="legend1.title2" defaultMessage="areas of illegal mining">
                {(txt) => (txt)}
                </FormattedMessage>
                <span className={this.state.arrowClass} onClick={this.toggle}></span>
            </label>
            <Collapse isOpened={this.state.collapse}>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',paddingTop:'10px'}}><img src={require('images/legend-icons/ico_square_0.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_0" defaultMessage="active">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_1.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_1" defaultMessage="active">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_2.png')} alt='ico_circle-11_inactive2' title='ico_circle-11_inactive2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_2" defaultMessage="inactive">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_3.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_3" defaultMessage="no information">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_4.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_4" defaultMessage="no information">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_5.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_5" defaultMessage="no information">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_square_6.png')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend2_1_6" defaultMessage="no information">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
            </Collapse>
        </div>
        )
    }
}

export default RAISGPressoes2018_geral_escala2;