var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cheki2polyligne_1 = new ol.format.GeoJSON();
var features_cheki2polyligne_1 = format_cheki2polyligne_1.readFeatures(json_cheki2polyligne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki2polyligne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki2polyligne_1.addFeatures(features_cheki2polyligne_1);
var lyr_cheki2polyligne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki2polyligne_1, 
                style: style_cheki2polyligne_1,
                popuplayertitle: 'cheki 2 polyligne',
                interactive: true,
                title: '<img src="styles/legend/cheki2polyligne_1.png" /> cheki 2 polyligne'
            });
var format_RUISSEAUNGIDHA_2 = new ol.format.GeoJSON();
var features_RUISSEAUNGIDHA_2 = format_RUISSEAUNGIDHA_2.readFeatures(json_RUISSEAUNGIDHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISSEAUNGIDHA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISSEAUNGIDHA_2.addFeatures(features_RUISSEAUNGIDHA_2);
var lyr_RUISSEAUNGIDHA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISSEAUNGIDHA_2, 
                style: style_RUISSEAUNGIDHA_2,
                popuplayertitle: 'RUISSEAU NGIDHA',
                interactive: true,
                title: '<img src="styles/legend/RUISSEAUNGIDHA_2.png" /> RUISSEAU NGIDHA'
            });
var format_cheki2nuv_3 = new ol.format.GeoJSON();
var features_cheki2nuv_3 = format_cheki2nuv_3.readFeatures(json_cheki2nuv_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki2nuv_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki2nuv_3.addFeatures(features_cheki2nuv_3);
var lyr_cheki2nuv_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki2nuv_3, 
                style: style_cheki2nuv_3,
                popuplayertitle: 'cheki 2 nuv',
                interactive: true,
                title: '<img src="styles/legend/cheki2nuv_3.png" /> cheki 2 nuv'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cheki2polyligne_1.setVisible(true);lyr_RUISSEAUNGIDHA_2.setVisible(true);lyr_cheki2nuv_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cheki2polyligne_1,lyr_RUISSEAUNGIDHA_2,lyr_cheki2nuv_3];
lyr_cheki2polyligne_1.set('fieldAliases', {'pol': 'pol', });
lyr_RUISSEAUNGIDHA_2.set('fieldAliases', {'GF': 'GF', });
lyr_cheki2nuv_3.set('fieldAliases', {'uj': 'uj', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_cheki2polyligne_1.set('fieldImages', {'pol': '', });
lyr_RUISSEAUNGIDHA_2.set('fieldImages', {'GF': '', });
lyr_cheki2nuv_3.set('fieldImages', {'uj': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_cheki2polyligne_1.set('fieldLabels', {'pol': 'no label', });
lyr_RUISSEAUNGIDHA_2.set('fieldLabels', {'GF': 'no label', });
lyr_cheki2nuv_3.set('fieldLabels', {'uj': 'no label', });
lyr_cheki2nuv_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});