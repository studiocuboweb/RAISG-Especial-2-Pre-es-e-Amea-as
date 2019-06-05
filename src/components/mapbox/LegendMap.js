import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE1 from './styles/map1.json';
import MAP_STYLE2 from './styles/Map2.json';
import MAP_STYLE3 from './styles/Map3.json';
import MAP_STYLE4 from './styles/Map4.json';
import MAP_STYLE5 from './styles/Map5.json';
import MAP_STYLE6 from './styles/Map6.json';
import MAP_STYLE7 from './styles/Map7.json';
import MAP_STYLE8 from './styles/Map8.json';
import MAP_STYLE9 from './styles/Map9.json';
import MAP_STYLE10 from './styles/Map10.json';
import MAP_STYLE11 from './styles/Map11.json';
import "styles/mapbox.css";
import Legends from './legends/Legends';

const styles = {
  map1: MAP_STYLE1,
  map2: MAP_STYLE2,
  map3: MAP_STYLE3,
  map4: MAP_STYLE4,
  map5: MAP_STYLE5,
  map6: MAP_STYLE6,
  map7: MAP_STYLE7,
  map8: MAP_STYLE8,
  map9: MAP_STYLE9,
  map10: MAP_STYLE10,
  map11: MAP_STYLE11,
};

//const categories = ['labels', 'roads', 'mineriailegal-pt-5owfra', 'parks', 'water', 'background'];

const categories = ['bosquesprot','nacionales','departamentales','tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_vias_Vermelhos','TIPNIS_TI-limite_LEGENDA','TIPNIS_Nacionales-limite_LEGENDA','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_PontoDragado_hidroviaamazonica','LEGENDA_BR163_vias','Desmatamento_60m_3857_LZWNoData','PNCanaima_nacionales','LEGENDA_PontoDragado_hidroviaamazonica-','LEGENDA_Ferrograo','linha-viaplanejada-tipnis'];

// const notShowInLegend = {'map1':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_vias_Vermelhos','TIPNIS_TI-limite_LEGENDA','TIPNIS_Nacionales-limite_LEGENDA','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_PontoDragado_hidroviaamazonica'],
// 'map1_5':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_vias_Vermelhos','TIPNIS_TI-limite_LEGENDA','TIPNIS_Nacionales-limite_LEGENDA','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_PontoDragado_hidroviaamazonica'],
// 'map2':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','TIPNIS_TI-limite_LEGENDA','TIPNIS_Nacionales-limite_LEGENDA','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_PontoDragado_hidroviaamazonica'],
// 'map3':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_vias_Vermelhos','LEGENDA_PontoDragado_hidroviaamazonica'],
// 'map4':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_vias_Vermelhos'],
// 'map5':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_vias_Vermelhos','TIPNIS_TI-limite_LEGENDA','TIPNIS_Nacionales-limite_LEGENDA','LEGENDA_RIOS_hidroviaamazonica'],
// 'map6':['tindigenas','petroleo_LEGENDA','tindigenas_LEGENDA','LEGENDA_mineria_azulEscuro','LEGENDA_RIOS_hidroviaamazonica','LEGENDA_BR163_vias','Desmatamento_60m_3857_LZWNoData','LEGENDA_vias_Vermelhos']
// };

// Layer id patterns by category
const layerSelector = {
  'bosquesprot': /bosquesprot/,
  'nacionales': /nacionales/,
  'departamentales': /departamentales/,
  'tindigenas': /tindigenas/,
  'petroleo_LEGENDA': /petroleo_LEGENDA/,
  'tindigenas_LEGENDA': /tindigenas_LEGENDA/,
  'LEGENDA_mineria_azulEscuro': /LEGENDA_mineria_azulEscuro/,
  'LEGENDA_vias_Vermelhos': /LEGENDA_vias_Vermelhos/,
  'TIPNIS_TI-limite_LEGENDA': /TIPNIS_TI-limite_LEGENDA/,
  'TIPNIS_Nacionales-limite_LEGENDA': /TIPNIS_Nacionales-limite_LEGENDA/,
  'LEGENDA_RIOS_hidroviaamazonica': /LEGENDA_RIOS_hidroviaamazonica/,
  'LEGENDA_PontoDragado_hidroviaamazonica': /LEGENDA_PontoDragado_hidroviaamazonica/,
  'LEGENDA_BR163_vias':/LEGENDA_BR163_vias/,
  'Desmatamento_60m_3857_LZWNoData':/Desmatamento_60m_3857_LZWNoData/,
  'PNCanaima_nacionales':/PNCanaima_nacionales/,
  'LEGENDA_PontoDragado_hidroviaamazonica-':/LEGENDA_PontoDragado_hidroviaamazonica-/,
  'LEGENDA_Ferrograo':/LEGENDA_Ferrograo/,
  'linha-viaplanejada-tipnis':/linha-viaplanejada-tipnis/
};

// const subCategories = {
//   'bosquesprot': {
//     'activo':'ico_circle-11_active2'
//     ,'inactive':'ico_circle-11_inactive2'
//     ,'s.i':'ico_circle-11_noinfo2'
//     ,'activo (local. aproximada)':'ico_circle-stroked-11_active2'
//     ,'inactivo (local. aproximada)':'ico_circle-stroked-11_inactive2'
//     ,'s.i (local. aproximada)':'ico_circle-stroked-11_noinfo2'
//   },
//   'nacionales': {
//     'rios':'#b350f1'
//   },
//   'departamentales': {
//     'activo':'hsl(260, 100%, 73%)'
//     ,'inactivo':'#492173'
//     ,'s.i':'#733dd1'    
//   },
//   'LEGENDA_mineria_azulEscuro': {
//     'em exploração':'#29dbc3'
//     ,'solicitud':'#037587'
//     ,'potencial':'#012f37'  
//     ,'s.i':'#000000'    
//   },
//   'LEGENDA_vias_Vermelhos': {
//     'Yanomami': '#eb5905'
//   },
//   'TIPNIS_TI-limite_LEGENDA': {
//     'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
//     'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
//     'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
//     'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
//     'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
//   },
//   'TIPNIS_Nacionales-limite_LEGENDA': {
//     'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
//     'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
//     'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
//     'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
//     'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
//   },
//   'LEGENDA_RIOS_hidroviaamazonica': {
//     'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
//     'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
//     'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
//     'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
//     'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
//   },
//   'LEGENDA_PontoDragado_hidroviaamazonica': {
//     'pressão: garimpo ativo dentro': '#f37859',
//     'pressão: balsas dentro/no limite': 'hsla(17, 99%, 67%, 0.8)',
//     'ameaça: garimpo inativo dentro': 'hsla(47, 98%, 59%, 0.8)',
//     'ameaça: garimpo no limite entorno': 'hsla(52, 76%, 74%, 0.8)',
//     'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.41)'
//   }
// }

// const layerLabels = {
//   'bosquesprot': 'pontos de mineração ilegal',
//   'nacionales': 'rios com mineração ilegal',
//   'departamentales': 'áreas de mineração ilegal',
//   'LEGENDA_mineria_azulEscuro': 'áreas de mineração legal',
//   'LEGENDA_vias_Vermelhos': 'Terras Indígenas afetadas',
//   'TIPNIS_TI-limite_LEGENDA': 'Áreas protegidas (nacionais)',
//   'TIPNIS_Nacionales-limite_LEGENDA': 'Áreas protegidas (depart.)',
//   'LEGENDA_RIOS_hidroviaamazonica': 'Áreas protegidas (bosques)',
//   'LEGENDA_PontoDragado_hidroviaamazonica': 'Terras Indígenas'
// };

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class StyleControls extends PureComponent {

  constructor(props) {
    super(props);
    this.defaultMapStyle = fromJS(styles[this.props.map]);
    this._defaultLayers = this.defaultMapStyle.get('layers');
    
    this.state = {
      displayLegendBG: {'backgroundColor':'none'}, 
      displayLegend: {'display':'none'},
      displayIcon: 'block',
      visibility: {
        'bosquesprot': true,
        'nacionales': true,
        'departamentales': true,
        'tindigenas': true,
        'petroleo_LEGENDA': true,
        'tindigenas_LEGENDA': true,
        'LEGENDA_mineria_azulEscuro': true,
        'LEGENDA_vias_Vermelhos': true,
        'TIPNIS_TI-limite_LEGENDA': true,
        'TIPNIS_Nacionales-limite_LEGENDA': true,
        'LEGENDA_RIOS_hidroviaamazonica': true,
        'LEGENDA_PontoDragado_hidroviaamazonica': true,
        'LEGENDA_BR163_vias':true,
        'Desmatamento_60m_3857_LZWNoData':true,
        'PNCanaima_nacionales':true,
        'LEGENDA_PontoDragado_hidroviaamazonica-':true,
        'LEGENDA_Ferrograo':true,
        'linha-viaplanejada-tipnis':true
      },
      color: {
        'bosquesprot': '',
        'nacionales': '',
        'departamentales': '',
        'tindigenas': '',
        'petroleo_LEGENDA': '',
        'tindigenas_LEGENDA': '',
        'LEGENDA_mineria_azulEscuro': '',
        'LEGENDA_vias_Vermelhos':'',
        'TIPNIS_TI-limite_LEGENDA': '',
        'TIPNIS_Nacionales-limite_LEGENDA': '',
        'LEGENDA_RIOS_hidroviaamazonica': '',
        'LEGENDA_PontoDragado_hidroviaamazonica':'',
        'LEGENDA_BR163_vias':'',
        'Desmatamento_60m_3857_LZWNoData':'',
        'PNCanaima_nacionales':'',
        'LEGENDA_PontoDragado_hidroviaamazonica-':'',
        'LEGENDA_Ferrograo':'',
        'linha-viaplanejada-tipnis':''
      }
    };
  }

  componentDidMount() {
    var visibility = '';
    if (this.props.map == 'map8') {
      visibility = {...this.state.visibility, ['tindigenas']: false, ['bosquesprot']: false, ['nacionales']: false, ['departamentales']: false};
    } else if (this.props.map == 'map5') {
      visibility = {...this.state.visibility, ['tindigenas']: false};
    } else if (this.props.map == 'map7') {
      visibility = {...this.state.visibility, ['tindigenas']: false, ['bosquesprot']: false, ['nacionales']: false, ['departamentales']: false};
    } else if (this.props.map == 'map11' || this.props.map == 'map10') {
      visibility = {...this.state.visibility, ['bosquesprot']: false, ['nacionales']: false, ['departamentales']: false, ['tindigenas']: false};
    } else {
      visibility = {...this.state.visibility, [this.props.showExtraLayers]: true};
    }
    this.setState({visibility})
    this._updateMapStyle({...this.state,visibility});
    // if (this.props.showExtraLayers.length > 0) {
    //   var visibility = '';
    //   console.log('VISIBILIDADE');
    //   console.log(this.state.visibility);
    //   if (this.props.map == 'map3') {
    //     visibility = {...this.state.visibility, ['TIPNIS_TI-limite_LEGENDA']: true, ['TIPNIS_Nacionales-limite_LEGENDA']: true, ['LEGENDA_RIOS_hidroviaamazonica']: true};
    //   } else if (this.props.map == 'map4') {
    //     visibility = {...this.state.visibility, ['TIPNIS_TI-limite_LEGENDA']: true, ['TIPNIS_Nacionales-limite_LEGENDA']: true, ['LEGENDA_PontoDragado_hidroviaamazonica']: true};
    //   } else if (this.props.map == 'map6') {
    //     visibility = {...this.state.visibility, ['TIPNIS_TI-limite_LEGENDA']: true, ['TIPNIS_Nacionales-limite_LEGENDA']: true, ['LEGENDA_PontoDragado_hidroviaamazonica']: true, ['LEGENDA_BR163_vias']: true};
    //   } else if (this.props.map == 'map11') {
    //     visibility = {...this.state.visibility, ['bosquesprot']: false, ['TIPNIS_Nacionales-limite_LEGENDA']: true, ['LEGENDA_PontoDragado_hidroviaamazonica']: true, ['Desmatamento_60m_3857_LZWNoData']: true};
    //   } else {
    //     visibility = {...this.state.visibility, [this.props.showExtraLayers]: true};
    //   }
    //   this.setState({visibility})
    //   this._updateMapStyle({...this.state,visibility});
    // } else { 
    //   this._updateMapStyle(this.state);
    // }
  }

  _onColorChange(name, event) {
    const color = {...this.state.color, [name]: event.target.value};
    this.setState({color});
    this._updateMapStyle({...this.state, color});
  }

  _onVisibilityChange(name,target,parent_scope) {
    
    let visibility;
    if (name == 'areas-naturales-protegidas' ) {
      visibility = {...parent_scope.state.visibility, ['bosquesprot']: target, ['nacionales']: target, ['departamentales']: target};
    } else {
      visibility = {...parent_scope.state.visibility, [name]: target};
    }

    parent_scope.setState({visibility});
    parent_scope._updateMapStyle({...parent_scope.state, visibility});
  }
  
  _updateMapStyle({visibility, color}) {
    const layers = this._defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type] && color[category] !== '') {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });
    this.props.onChange(this.defaultMapStyle.set('layers', layers));
  }

  _renderLayerControl() {
      const {visibility} = this.state;
      const LegendCollapse = Legends;
      return (
          <div>
          <LegendCollapse
            visibility={visibility}
            onVisibilityChange={this._onVisibilityChange}
            legend={this.props.legend}
            parentScope={this}
          />
          </div>
      );
  }
  _toggleLegend() {
    if (this.state.displayLegend['display'] == 'none') {
      this.setState({displayLegend: {'display':'block'}})
      this.setState({displayLegendBG: {'backgroundColor':'#fff'}})
      this.setState({displayIcon:'none'})
    } else {
      this.setState({displayLegend: {'display':'none'}})
      this.setState({displayLegendBG: {'backgroundColor':'transparent'}})
      this.setState({displayIcon:'block'});
    }
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div style={this.state.displayLegendBG} className='control-panel-padding'>
          <button className='fa fa-map mapbox_legend-ico mapbox_legend-block mapbox_legend-button' style={{'cursor':'pointer',color:'#C0C0C0',float:'right',display: this.state.displayIcon}} onClick={this._toggleLegend.bind(this)}></button>
          <div style={this.state.displayLegend}>
            <div className='mapbox_legend-align-center' style={{'height':'10px'}}>
              <a href='#' className='fa fa-window-close mapbox_legend-btn-close'  style={{'cursor':'pointer',color:'#C0C0C0', 'font-size':'.8em', 'vertical-align':'top'}} onClick={this._toggleLegend.bind(this)}></a>
            </div>
            <hr />
            { 
              // categories.map((name) => this._renderLayerControl(name,this)) 
              this._renderLayerControl(name,this)
            }
          </div>
        </div>
      </Container>
    );
  }
}