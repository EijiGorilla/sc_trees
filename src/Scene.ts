import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import {
  chainageLayer,
  stationLayer,
  prowLayer,
  treeCuttingLayer,
  treeCompensationLayer,
  treeConservationLayer,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [chainageLayer, stationLayer, prowLayer],
});

const treeGroupLayer = new GroupLayer({
  title: 'Trees',
  visible: true,
  visibilityMode: 'exclusive',
  layers: [treeConservationLayer, treeCompensationLayer, treeCuttingLayer],
});

// Change the layer order by using index numbers in map.add
map.add(treeGroupLayer);
map.add(alignmentGroupLayer);
map.add(prowLayer);

export const view = new MapView({
  container: undefined,
  map,
  center: [120.99, 14.4],
  zoom: 10,
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  visibilityAppearance: 'checkbox',
  selectionMode: 'multiple',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' ||
    item.title === 'Tree Compensation' ||
    item.title === 'Tree Conservation'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: treeCuttingLayer,
    searchFields: ['ID'],
    displayField: 'ID',
    exactMatch: false,
    outFields: ['*'],
    name: 'Tree ID',
    placeholder: 'example: DP-T-1',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'TreeID',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
