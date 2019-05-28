import React from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import Legend1_Areas_Naturales_Protegidas from './components/Legend1_Areas_Naturales_Protegidas'
import Legend2_Territorios_Indigenas from './components/Legend2_Territorios_Indigenas'
import Legend3_Lotes_Petroleo from './components/Legend3_Lotes_Petroleo.js'
import Legend4_Zonas_Mineras from './components/Legend4_Zonas_Mineras.js'

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
        console.log('legenda')
        console.log(legend)
        return (
            <div key="1" className="input">
            {legend == 'legend_group1' &&
                <div>
                    <Legend1_Areas_Naturales_Protegidas key="legend1" legendGroup='legend_group1' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend2" legendGroup='legend_group1' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group2' &&
                <div>
                    <Legend3_Lotes_Petroleo key="legend3" legendGroup='legend_group2' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend4" legendGroup='legend_group2' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group3' &&
                <div>
                    <Legend4_Zonas_Mineras key="legend5" legendGroup='legend_group3' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend7" legendGroup='legend_group3' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend2" legendGroup='legend_group1' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            </div>
        );
      }

}

export default LegendCollapse