import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend1_Areas_Naturales_Protegidas extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }
    componentDidMount() {
        if (this.props.defaultOpened == true) { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        } else {
            this.setState({arrowClass: 'fa fa-caret-right'})
        }
        this.setState({collapse:this.props.defaultOpened});
        /*****
        //Grupos onde a legenda vem desativada por padrão
         *****/
        if (this.props.legendGroup == 'legend_group7' || this.props.legendGroup == 'legend_group8') {
            var items = document.getElementsByName('acs');
            var itemMaster = document.getElementsByName('areas-protegidas')
            itemMaster[0].checked = false
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == 'checkbox') {
                    items[i].checked = false;
                }
            }
        }
        if (this.props.legendGroup == 'legend_group10' || this.props.legendGroup == 'legend_group11') {
            var items = document.getElementsByName('acs');
            var itemMaster = document.getElementsByName('areas-protegidas')
            itemMaster[0].checked = false;
            items[0].checked = false;
            items[1].checked = false;
            items[2].checked = false;
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

        var items = document.getElementsByName('acs');
        var itemMaster = document.getElementsByName('areas-protegidas')
        if (name == 'areas-naturales-protegidas') { 
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == 'checkbox') {
                    if (itemMaster[0].checked) {
                        items[i].checked = true;
                    } else {
                        items[i].checked = false;
                    }
                }
            }
        } else {
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == 'checkbox') {
                    if (items[i].checked == true) {
                        itemMaster[0].checked = true;
                        break;
                    } else {
                        itemMaster[0].checked = false;
                    }
                }
            }
        }
        
        this.props._onChangeHandler(name,this.props.parentScope,event.target.checked)

        // event.preventDefault(); // Let's stop this event.
        // event.stopPropagation(); // Really this time.
    }

    render () {
        const {legendGroup} = this.props;
        return (
            <div>
                <input type="checkbox" name='areas-protegidas' className="mapbox_custom-checkbox-colored_anp" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'areas-naturales-protegidas')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend1.title" defaultMessage="Natural Protected Areas">
                    {(txt) => (txt)}
                </FormattedMessage>
                <span id="seta" className={this.state.arrowClass} onClick={this.toggle}></span>
                </label>
                <Collapse isOpened={this.state.collapse}>
                <table style={{'marginTop':'-10px','marginLeft':'16px'}}>
                <tbody>
                <tr>
                    <td>
                        <div className='mapbox_control-panel_subtitle' style={{paddingTop:'10px'}}>
                            <input type="checkbox" name="acs" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'nacionales')} />
                            <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                                <FormattedMessage id="legend1.item1" defaultMessage="national">
                                    {(txt) => (txt)}
                                </FormattedMessage>
                            </label>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <input type="checkbox" name="acs" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'departamentales')} />
                            <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                            <FormattedMessage id="legend1.item2" defaultMessage="state">
                                {(txt) => (txt)}
                            </FormattedMessage>
                            </label>
                        </div>
                        <div className='mapbox_control-panel_subtitle'>
                            <input type="checkbox" name="acs" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'bosquesprot')} />
                            <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                                <FormattedMessage id="legend1.item3" defaultMessage="Protective Forest (Ecuador)">
                                {(txt) => (txt)}
                                </FormattedMessage>
                            </label>
                        </div>
                        {(legendGroup == 'legend_group2' || legendGroup == 'legend_group3' || legendGroup == 'legend_group5' || legendGroup == 'legend_group8' || legendGroup == 'legend_group9' || legendGroup == 'legend_group10') &&
                            <block>
                                <div className='mapbox_control-panel_subtitle'>
                                    <span style={{'width':'17px',height:'15px'}}>
                                        <img src={require('images/legend-icons/map_03-01.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','margin-left':'2px','padding':0}} />
                                    </span>
                                    <FormattedMessage id="legend1.item4" defaultMessage="no pressure or threat known">
                                        {(txt) => (txt)}
                                    </FormattedMessage>
                                </div>
                                <div className='mapbox_control-panel_subtitle'>
                                    <span style={{'width':'17px',height:'15px'}}>
                                        <img src={require('images/legend-icons/map_03-02.png')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':'6px','margin-left':'2px','padding':0}} />
                                    </span>
                                    <FormattedMessage id="legend1.item5" defaultMessage="no pressure or threat known">
                                        {(txt) => (txt)}
                                    </FormattedMessage>
                                </div>
                            </block>
                        }
                    </td>
                </tr>
                </tbody>
                </table>
                </Collapse>
            </div>
        )
    }
}

export default Legend1_Areas_Naturales_Protegidas;