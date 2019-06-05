import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend4_Zonas_Mineras extends Component {

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
            <div>
                <input type="checkbox" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA_mineria_azulEscuro')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend4.title" defaultMessage="Natural Protected Areas">
                    {(txt) => (txt)}
                </FormattedMessage>
                <span id="seta" className={this.state.arrowClass} onClick={this.toggle}></span>
                </label>
                <Collapse isOpened={this.state.collapse}>
                <table style={{'marginTop':'-10px','marginLeft':'11px'}}>
                <tbody>
                <tr>
                    <td>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px',paddingTop:'10px'}}>
                                <img src={require('images/legend-icons/map10_3.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item1" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px'}}>
                                <img src={require('images/legend-icons/map10_2.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item2" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px'}}>
                                <img src={require('images/legend-icons/map10_1.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item3" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px'}}>
                                <img src={require('images/legend-icons/map10_4.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item4" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px'}}>
                                <img src={require('images/legend-icons/map10_5.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item5" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'20px',height:'15px'}}>
                                <img src={require('images/legend-icons/map10_6.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend4.item6" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                    </td>
                </tr>
                </tbody>
                </table>
                </Collapse>
            </div>
        )
    }
}

export default Legend4_Zonas_Mineras;