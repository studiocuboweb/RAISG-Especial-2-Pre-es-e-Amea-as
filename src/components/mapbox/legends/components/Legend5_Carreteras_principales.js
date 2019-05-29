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
                <input type="checkbox" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA_vias_Vermelhos')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend5.title" defaultMessage="Main roads">
                    {(txt) => (txt)}
                </FormattedMessage>
                <span id="seta" className={this.state.arrowClass} onClick={this.toggle}></span>
                </label>
                <Collapse isOpened={this.state.collapse}>
                <table style={{'marginTop':'-10px','marginLeft':'16px'}}>
                <tbody>
                <tr>
                    <td>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'15px',height:'15px',paddingTop:'10px'}}>
                                <img src={require('images/legend-icons/map_06_1.gif')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin-top':'8px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend5.item1" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'15px',height:'15px',paddingTop:'10px'}}>
                                <img src={require('images/legend-icons/map_06_2.gif')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin-top':'8px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend5.item2" defaultMessage="no pressure or threat known">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <span style={{'width':'15px',height:'15px',paddingTop:'10px'}}>
                                <img src={require('images/legend-icons/map_06_3.gif')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin-top':'8px','padding':0}} />
                            </span>
                            <FormattedMessage id="legend5.item3" defaultMessage="no pressure or threat known">
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