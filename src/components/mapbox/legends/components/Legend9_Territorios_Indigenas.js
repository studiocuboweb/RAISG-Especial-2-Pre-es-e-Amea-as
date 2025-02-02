import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend9_Territorios_Indigenas extends Component {

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

        /*****
        //Grupos onde a legenda vem desativada por padrão
         *****/
        if (this.props.legendGroup == 'legend_group7') {
            var items = document.getElementsByName('indigena2');
            items[0].checked = false;
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
            <div className='mapbox_control-panel_subtitle' style={{paddingTop:'10px'}}>
                <input type="checkbox" name="indigena2" className="mapbox_custom-checkbox-colored_1" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'tindigenas')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                    <FormattedMessage id="legend9.title" defaultMessage="national">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </label>
            </div>
        )
    }
}

export default Legend9_Territorios_Indigenas;