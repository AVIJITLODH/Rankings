var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_World_2 = new ol.format.GeoJSON();
var features_World_2 = format_World_2.readFeatures(json_World_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_World_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_2.addFeatures(features_World_2);
var lyr_World_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_World_2, 
                style: style_World_2,
                popuplayertitle: 'World',
                interactive: true,
                title: '<img src="styles/legend/World_2.png" /> World'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_World_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrain_1,lyr_World_2];
lyr_World_2.set('fieldAliases', {'NAME': 'Country Name :', 'best place': 'Best World Cup Finish :', 'ruling bod': 'Ruling Body of Football :', 'RANK': 'Current Rank :', 'FLAG': 'National Flag :', });
lyr_World_2.set('fieldImages', {'NAME': 'TextEdit', 'best place': 'TextEdit', 'ruling bod': 'TextEdit', 'RANK': 'TextEdit', 'FLAG': 'ExternalResource', });
lyr_World_2.set('fieldLabels', {'NAME': 'inline label - always visible', 'best place': 'hidden field', 'ruling bod': 'hidden field', 'RANK': 'header label - visible with data', 'FLAG': 'inline label - always visible', });
lyr_World_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});