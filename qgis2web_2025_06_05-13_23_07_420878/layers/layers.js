var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Средний уровень шума по районам Москвы',
                interactive: true,
    title: 'Средний уровень шума по районам Москвы<br />\
    <img src="styles/legend/_0_0.png" /> 47,2 - 48,7<br />\
    <img src="styles/legend/_0_1.png" /> 48,7 - 49,72<br />\
    <img src="styles/legend/_0_2.png" /> 49,72 - 50,33<br />\
    <img src="styles/legend/_0_3.png" /> 50,33 - 51,5<br />\
    <img src="styles/legend/_0_4.png" /> 51,5 - 52,05<br />\
    <img src="styles/legend/_0_5.png" /> 52,05 - 53,1<br />\
    <img src="styles/legend/_0_6.png" /> 53,1 - 53,6<br />\
    <img src="styles/legend/_0_7.png" /> 53,6 - 54,48<br />\
    <img src="styles/legend/_0_8.png" /> 54,48 - 56,47<br />\
    <img src="styles/legend/_0_9.png" /> 56,47 - 67,3<br />' });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'name': 'name', 'mean_shum': 'mean_shum', });
lyr__0.set('fieldImages', {'name': 'TextEdit', 'mean_shum': 'TextEdit', });
lyr__0.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'loc_name': 'no label', 'name:vi': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:zh': 'no label', 'contact:website': 'no label', 'name:pt': 'no label', 'name:it': 'no label', 'population': 'no label', 'name:de': 'no label', 'image': 'no label', 'website': 'no label', 'name:eo': 'no label', 'omkte:code': 'no label', 'omkmo:code': 'no label', 'name:be': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'official_status': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name:ca': 'no label', 'name': 'no label', 'description': 'no label', 'boundary': 'no label', 'alt_name': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', 'shum_mean': 'inline label - always visible', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});