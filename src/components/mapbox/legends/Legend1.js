import React from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import RAISGPressoes2018_geral_escala1 from './components/RAISGPressoes2018_geral_escala1'
import RAISGPressoes2018_geral_escala2 from './components/RAISGPressoes2018_geral_escala2'
import LegalMining from './components/LegalMining'
import ProtectedAreas from './components/ProtectedAreas'
import ProtectedAreaNational from './components/ProtectedAreaNational'
import IndigenousTerritories from './components/IndigenousTerritories'
import ProtectedAreaNationalDepartamental from './components/ProtectedAreaNationalDepartamental'
import YanomamiIndigenousTerritories from './components/YanomamiIndigenousTerritories'

class LegendCollapse extends React.Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler(name,event,checked) {
        this.props.onVisibilityChange(name,checked,this.props.parentScope)
    }

    render() {
        const {legend} = this.props;
        return (
            <div key="1" className="input">
            {legend == 'legend1' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend11" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend12" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend2' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend21" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend22" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <LegalMining key="legend24" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend3' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend3" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend3" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <ProtectedAreas key="legend3" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend4' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend41" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend42" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <ProtectedAreaNational key="legend43" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend5' &&
                <div>
                    <RAISGPressoes2018_geral_escala2 key="legend51" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <ProtectedAreaNationalDepartamental key="legend53" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IndigenousTerritories key="legend54" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend6' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend61" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend62" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IndigenousTerritories key="legend64" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend7' &&
                <div>
                    <IndigenousTerritories key="legend72" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                    <ProtectedAreaNational key="legend73" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend8' &&
                <div>
                    <ProtectedAreaNational key="legend82" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                    <IndigenousTerritories key="legend83" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            {legend == 'legend9' &&
                <div>
                    <RAISGPressoes2018_geral_escala1 key="legend91" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <RAISGPressoes2018_geral_escala2 key="legend92" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <YanomamiIndigenousTerritories key="legend94" defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            </div>
        );
      }

}

export default LegendCollapse