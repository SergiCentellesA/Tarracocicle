var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Puntcrtic3_2 = new ol.format.GeoJSON();
var features_Puntcrtic3_2 = format_Puntcrtic3_2.readFeatures(json_Puntcrtic3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntcrtic3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntcrtic3_2.addFeatures(features_Puntcrtic3_2);
var lyr_Puntcrtic3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntcrtic3_2, 
                style: style_Puntcrtic3_2,
                popuplayertitle: "Punt crític 3",
                interactive: true,
                    title: '<img src="styles/legend/Puntcrtic3_2.png" /> Punt crític 3'
                });
var format_Puntcrtic2_3 = new ol.format.GeoJSON();
var features_Puntcrtic2_3 = format_Puntcrtic2_3.readFeatures(json_Puntcrtic2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntcrtic2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntcrtic2_3.addFeatures(features_Puntcrtic2_3);
var lyr_Puntcrtic2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntcrtic2_3, 
                style: style_Puntcrtic2_3,
                popuplayertitle: "Punt crític 2",
                interactive: true,
                    title: '<img src="styles/legend/Puntcrtic2_3.png" /> Punt crític 2'
                });
var format_Puntcrtic1_4 = new ol.format.GeoJSON();
var features_Puntcrtic1_4 = format_Puntcrtic1_4.readFeatures(json_Puntcrtic1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntcrtic1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntcrtic1_4.addFeatures(features_Puntcrtic1_4);
var lyr_Puntcrtic1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntcrtic1_4, 
                style: style_Puntcrtic1_4,
                popuplayertitle: "Punt crític 1",
                interactive: true,
                    title: '<img src="styles/legend/Puntcrtic1_4.png" /> Punt crític 1'
                });

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_Puntcrtic3_2.setVisible(true);lyr_Puntcrtic2_3.setVisible(true);lyr_Puntcrtic1_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_Puntcrtic3_2,lyr_Puntcrtic2_3,lyr_Puntcrtic1_4];
lyr_Puntcrtic3_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Municipi': 'Municipi', 'Prioritat': 'Prioritat', 'Zona': 'Zona', });
lyr_Puntcrtic2_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Municipi': 'Municipi', 'Prioritat': 'Prioritat', 'Zona': 'Zona', });
lyr_Puntcrtic1_4.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Municipi': 'Municipi', 'Prioritat': 'Prioritat', 'Zona': 'Zona', });
lyr_Puntcrtic3_2.set('fieldImages', {'id': 'TextEdit', 'Nom': '', 'Municipi': '', 'Prioritat': '', 'Zona': '', });
lyr_Puntcrtic2_3.set('fieldImages', {'id': 'TextEdit', 'Nom': '', 'Municipi': '', 'Prioritat': '', 'Zona': '', });
lyr_Puntcrtic1_4.set('fieldImages', {'id': 'TextEdit', 'Nom': '', 'Municipi': '', 'Prioritat': '', 'Zona': '', });
lyr_Puntcrtic3_2.set('fieldLabels', {'id': 'no label', 'Nom': 'inline label - always visible', 'Municipi': 'inline label - always visible', 'Prioritat': 'inline label - always visible', 'Zona': 'inline label - always visible', });
lyr_Puntcrtic2_3.set('fieldLabels', {'id': 'no label', 'Nom': 'inline label - always visible', 'Municipi': 'inline label - always visible', 'Prioritat': 'inline label - always visible', 'Zona': 'inline label - always visible', });
lyr_Puntcrtic1_4.set('fieldLabels', {'id': 'no label', 'Nom': 'inline label - always visible', 'Municipi': 'inline label - always visible', 'Prioritat': 'inline label - always visible', 'Zona': 'inline label - always visible', });
lyr_Puntcrtic1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});