import React from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import Legend1_Areas_Naturales_Protegidas from './components/Legend1_Areas_Naturales_Protegidas'
import Legend2_Territorios_Indigenas from './components/Legend2_Territorios_Indigenas'
import Legend3_Lotes_Petroleo from './components/Legend3_Lotes_Petroleo.js'
import Legend4_Zonas_Mineras from './components/Legend4_Zonas_Mineras.js'
import Legend5_Carreteras_principales from './components/Legend5_Carreteras_principales.js'
import Legend6_Deforestacion from './components/Legend6_Deforestacion.js'
import Legend7_LEGENDA_RIOS_hidroviaamazonica from './components/Legend7_Hidrovia_planificada.js'
import Legend8_LEGENDA_PontoDragado_hidroviaamazonica from './components/Legend8_Pontos_de_dragado.js'
import Legend9_Territorios_Indigenas from './components/Legend9_Territorios_Indigenas.js'
import Legend10_Ferrovia_Planificada from './components/Legend10_Ferrovia_Planificada.js'
import Legend11_Carreteras_principales from './components/Legend11_Carreteras_principales.js'
import Legend12_Limite_TIPNIS from './components/Legend12_Limite_TIPNIS.js'
import Legend13_Limite_TIPNIS_nacional from './components/Legend13_Limite_TIPNIS_nacional.js'
import Legend14_Carretera_Planificada from './components/Legend14_Carretera_Planificada.js'

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
                    <Legend5_Carreteras_principales key="legend3" legendGroup='legend_group2' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend6_Deforestacion key="legend4" legendGroup='legend_group2' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group3' &&
                <div>
                    <Legend5_Carreteras_principales key="legend10" legendGroup='legend_group3' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend11" legendGroup='legend_group3' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend12" legendGroup='legend_group3' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group5' &&
                <div>
                    <Legend14_Carretera_Planificada key="legend23" legendGroup='legend_group5' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend5_Carreteras_principales key="legend10" legendGroup='legend_group5' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend11" legendGroup='legend_group5' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend13_Limite_TIPNIS_nacional key="legend12" legendGroup='legend_group5' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend21" legendGroup='legend_group5' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend12_Limite_TIPNIS key="legend22" legendGroup='legend_group5' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group6' &&
                <div>
                    <Legend5_Carreteras_principales key="legend3" legendGroup='legend_group2' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend6_Deforestacion key="legend4" legendGroup='legend_group2' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group7' &&
                <div>
                    <Legend7_LEGENDA_RIOS_hidroviaamazonica key="legend13" legendGroup='legend_group7' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend8_LEGENDA_PontoDragado_hidroviaamazonica key="legend14" legendGroup='legend_group7' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend15" legendGroup='legend_group7' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend9_Territorios_Indigenas key="legend16" legendGroup='legend_group7' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group8' &&
                <div>
                    <Legend10_Ferrovia_Planificada key="legend17" legendGroup='legend_group8' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend11_Carreteras_principales key="legend18" legendGroup='legend_group8' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend19" legendGroup='legend_group8' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend20" legendGroup='legend_group8' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group9' &&
                <div>
                    <Legend3_Lotes_Petroleo key="legend9" legendGroup='legend_group9' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend10" legendGroup='legend_group9' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend24" legendGroup='legend_group9' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    
                </div>
            }
            {legend == 'legend_group10' &&
                <div>
                    <Legend4_Zonas_Mineras key="legend5" legendGroup='legend_group10' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend7" legendGroup='legend_group10' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend8" legendGroup='legend_group10' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend_group11' &&
                <div>
                    <Legend4_Zonas_Mineras key="legend5" legendGroup='legend_group10' defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend1_Areas_Naturales_Protegidas key="legend7" legendGroup='legend_group10' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <Legend2_Territorios_Indigenas key="legend8" legendGroup='legend_group10' defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            </div>
        );
      }

}

export default LegendCollapse