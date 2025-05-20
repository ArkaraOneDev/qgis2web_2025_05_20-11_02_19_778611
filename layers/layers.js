var wms_layers = [];


        var lyr_03GoogleSateliteHybrid_0 = new ol.layer.Tile({
            'title': '03. Google Satelite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Komoditas_1 = new ol.format.GeoJSON();
var features_Komoditas_1 = format_Komoditas_1.readFeatures(json_Komoditas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Komoditas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Komoditas_1.addFeatures(features_Komoditas_1);
var lyr_Komoditas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Komoditas_1, 
                style: style_Komoditas_1,
                popuplayertitle: 'Komoditas',
                interactive: true,
    title: 'Komoditas<br />\
    <img src="styles/legend/Komoditas_1_0.png" /> Batubara<br />\
    <img src="styles/legend/Komoditas_1_1.png" /> Nikel<br />\
    <img src="styles/legend/Komoditas_1_2.png" /> Pasir Kuarsa<br />' });

lyr_03GoogleSateliteHybrid_0.setVisible(true);lyr_Komoditas_1.setVisible(true);
var layersList = [lyr_03GoogleSateliteHybrid_0,lyr_Komoditas_1];
lyr_Komoditas_1.set('fieldAliases', {'LAYER': 'LAYER', 'IUP': 'IUP', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Zona': 'Zona', 'Sumber Daya': 'Sumber Daya', 'Kualitas': 'Kualitas', 'Update': 'Update', });
lyr_Komoditas_1.set('fieldImages', {'LAYER': 'TextEdit', 'IUP': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Zona': 'TextEdit', 'Sumber Daya': 'TextEdit', 'Kualitas': 'TextEdit', 'Update': 'TextEdit', });
lyr_Komoditas_1.set('fieldLabels', {'LAYER': 'inline label - always visible', 'IUP': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Zona': 'inline label - always visible', 'Sumber Daya': 'inline label - always visible', 'Kualitas': 'inline label - always visible', 'Update': 'inline label - always visible', });
lyr_Komoditas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});