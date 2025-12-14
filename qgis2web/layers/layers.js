var wms_layers = [];


        var lyr_GoogleEarthSatelite_0 = new ol.layer.Tile({
            'title': 'Google Earth Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Sawah_2 = new ol.format.GeoJSON();
var features_Sawah_2 = format_Sawah_2.readFeatures(json_Sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_2.addFeatures(features_Sawah_2);
var lyr_Sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_2, 
                style: style_Sawah_2,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_2.png" /> Sawah'
            });
var format_Lapang_3 = new ol.format.GeoJSON();
var features_Lapang_3 = format_Lapang_3.readFeatures(json_Lapang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapang_3.addFeatures(features_Lapang_3);
var lyr_Lapang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapang_3, 
                style: style_Lapang_3,
                popuplayertitle: 'Lapang',
                interactive: true,
                title: '<img src="styles/legend/Lapang_3.png" /> Lapang'
            });
var format_BatasWilayahDesaBantarwuni_4 = new ol.format.GeoJSON();
var features_BatasWilayahDesaBantarwuni_4 = format_BatasWilayahDesaBantarwuni_4.readFeatures(json_BatasWilayahDesaBantarwuni_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahDesaBantarwuni_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahDesaBantarwuni_4.addFeatures(features_BatasWilayahDesaBantarwuni_4);
var lyr_BatasWilayahDesaBantarwuni_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahDesaBantarwuni_4, 
                style: style_BatasWilayahDesaBantarwuni_4,
                popuplayertitle: 'Batas Wilayah Desa Bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahDesaBantarwuni_4.png" /> Batas Wilayah Desa Bantarwuni'
            });
var format_batasdesa_5 = new ol.format.GeoJSON();
var features_batasdesa_5 = format_batasdesa_5.readFeatures(json_batasdesa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_5.addFeatures(features_batasdesa_5);
var lyr_batasdesa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_5, 
                style: style_batasdesa_5,
                popuplayertitle: 'batas desa',
                interactive: true,
                title: '<img src="styles/legend/batasdesa_5.png" /> batas desa'
            });
var format_RT013RW05_6 = new ol.format.GeoJSON();
var features_RT013RW05_6 = format_RT013RW05_6.readFeatures(json_RT013RW05_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT013RW05_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT013RW05_6.addFeatures(features_RT013RW05_6);
var lyr_RT013RW05_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT013RW05_6, 
                style: style_RT013RW05_6,
                popuplayertitle: 'RT 01-3 RW 05',
                interactive: true,
                title: '<img src="styles/legend/RT013RW05_6.png" /> RT 01-3 RW 05'
            });
var format_RT0104RW04_7 = new ol.format.GeoJSON();
var features_RT0104RW04_7 = format_RT0104RW04_7.readFeatures(json_RT0104RW04_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0104RW04_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0104RW04_7.addFeatures(features_RT0104RW04_7);
var lyr_RT0104RW04_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0104RW04_7, 
                style: style_RT0104RW04_7,
                popuplayertitle: 'RT 01-04 RW 04',
                interactive: true,
                title: '<img src="styles/legend/RT0104RW04_7.png" /> RT 01-04 RW 04'
            });
var format_RT0105RW03_8 = new ol.format.GeoJSON();
var features_RT0105RW03_8 = format_RT0105RW03_8.readFeatures(json_RT0105RW03_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0105RW03_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0105RW03_8.addFeatures(features_RT0105RW03_8);
var lyr_RT0105RW03_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0105RW03_8, 
                style: style_RT0105RW03_8,
                popuplayertitle: 'RT 01-05 RW 03',
                interactive: true,
                title: '<img src="styles/legend/RT0105RW03_8.png" /> RT 01-05 RW 03'
            });
var format_RT0107Rw02_9 = new ol.format.GeoJSON();
var features_RT0107Rw02_9 = format_RT0107Rw02_9.readFeatures(json_RT0107Rw02_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0107Rw02_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0107Rw02_9.addFeatures(features_RT0107Rw02_9);
var lyr_RT0107Rw02_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0107Rw02_9, 
                style: style_RT0107Rw02_9,
                popuplayertitle: 'RT 01-07 Rw 02',
                interactive: true,
                title: '<img src="styles/legend/RT0107Rw02_9.png" /> RT 01-07 Rw 02'
            });
var format_RT0107RW01_10 = new ol.format.GeoJSON();
var features_RT0107RW01_10 = format_RT0107RW01_10.readFeatures(json_RT0107RW01_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0107RW01_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0107RW01_10.addFeatures(features_RT0107RW01_10);
var lyr_RT0107RW01_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0107RW01_10, 
                style: style_RT0107RW01_10,
                popuplayertitle: 'RT 01-07 RW 01',
                interactive: true,
                title: '<img src="styles/legend/RT0107RW01_10.png" /> RT 01-07 RW 01'
            });
var format_BatasWilayahRw05_11 = new ol.format.GeoJSON();
var features_BatasWilayahRw05_11 = format_BatasWilayahRw05_11.readFeatures(json_BatasWilayahRw05_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw05_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw05_11.addFeatures(features_BatasWilayahRw05_11);
var lyr_BatasWilayahRw05_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw05_11, 
                style: style_BatasWilayahRw05_11,
                popuplayertitle: 'Batas Wilayah Rw 05',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw05_11.png" /> Batas Wilayah Rw 05'
            });
var format_BatasWilayahRw04_12 = new ol.format.GeoJSON();
var features_BatasWilayahRw04_12 = format_BatasWilayahRw04_12.readFeatures(json_BatasWilayahRw04_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw04_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw04_12.addFeatures(features_BatasWilayahRw04_12);
var lyr_BatasWilayahRw04_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw04_12, 
                style: style_BatasWilayahRw04_12,
                popuplayertitle: 'Batas Wilayah Rw 04',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw04_12.png" /> Batas Wilayah Rw 04'
            });
var format_BatasWilayahRw03_13 = new ol.format.GeoJSON();
var features_BatasWilayahRw03_13 = format_BatasWilayahRw03_13.readFeatures(json_BatasWilayahRw03_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw03_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw03_13.addFeatures(features_BatasWilayahRw03_13);
var lyr_BatasWilayahRw03_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw03_13, 
                style: style_BatasWilayahRw03_13,
                popuplayertitle: 'Batas Wilayah Rw 03',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw03_13.png" /> Batas Wilayah Rw 03'
            });
var format_BatasWilayahRw02_14 = new ol.format.GeoJSON();
var features_BatasWilayahRw02_14 = format_BatasWilayahRw02_14.readFeatures(json_BatasWilayahRw02_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw02_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw02_14.addFeatures(features_BatasWilayahRw02_14);
var lyr_BatasWilayahRw02_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw02_14, 
                style: style_BatasWilayahRw02_14,
                popuplayertitle: 'Batas Wilayah Rw 02',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw02_14.png" /> Batas Wilayah Rw 02'
            });
var format_BatasWilayahRw01_15 = new ol.format.GeoJSON();
var features_BatasWilayahRw01_15 = format_BatasWilayahRw01_15.readFeatures(json_BatasWilayahRw01_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw01_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw01_15.addFeatures(features_BatasWilayahRw01_15);
var lyr_BatasWilayahRw01_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw01_15, 
                style: style_BatasWilayahRw01_15,
                popuplayertitle: 'Batas Wilayah Rw 01',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw01_15.png" /> Batas Wilayah Rw 01'
            });
var format_RumahRT06_16 = new ol.format.GeoJSON();
var features_RumahRT06_16 = format_RumahRT06_16.readFeatures(json_RumahRT06_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT06_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT06_16.addFeatures(features_RumahRT06_16);
var lyr_RumahRT06_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRT06_16, 
                style: style_RumahRT06_16,
                popuplayertitle: 'Rumah RT 06',
                interactive: true,
                title: '<img src="styles/legend/RumahRT06_16.png" /> Rumah RT 06'
            });
var format_Rumahrt6_17 = new ol.format.GeoJSON();
var features_Rumahrt6_17 = format_Rumahrt6_17.readFeatures(json_Rumahrt6_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahrt6_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahrt6_17.addFeatures(features_Rumahrt6_17);
var lyr_Rumahrt6_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahrt6_17, 
                style: style_Rumahrt6_17,
                popuplayertitle: 'Rumah rt 6',
                interactive: true,
                title: '<img src="styles/legend/Rumahrt6_17.png" /> Rumah rt 6'
            });
var format_RumahRW02_18 = new ol.format.GeoJSON();
var features_RumahRW02_18 = format_RumahRW02_18.readFeatures(json_RumahRW02_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRW02_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRW02_18.addFeatures(features_RumahRW02_18);
var lyr_RumahRW02_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRW02_18, 
                style: style_RumahRW02_18,
                popuplayertitle: 'Rumah RW 02',
                interactive: true,
                title: '<img src="styles/legend/RumahRW02_18.png" /> Rumah RW 02'
            });
var format_LapanganDesaBantarwuni_19 = new ol.format.GeoJSON();
var features_LapanganDesaBantarwuni_19 = format_LapanganDesaBantarwuni_19.readFeatures(json_LapanganDesaBantarwuni_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganDesaBantarwuni_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganDesaBantarwuni_19.addFeatures(features_LapanganDesaBantarwuni_19);
var lyr_LapanganDesaBantarwuni_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganDesaBantarwuni_19, 
                style: style_LapanganDesaBantarwuni_19,
                popuplayertitle: 'Lapangan Desa Bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/LapanganDesaBantarwuni_19.png" /> Lapangan Desa Bantarwuni'
            });
var format_RumahWarga_20 = new ol.format.GeoJSON();
var features_RumahWarga_20 = format_RumahWarga_20.readFeatures(json_RumahWarga_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahWarga_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahWarga_20.addFeatures(features_RumahWarga_20);
var lyr_RumahWarga_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahWarga_20, 
                style: style_RumahWarga_20,
                popuplayertitle: 'Rumah Warga ',
                interactive: true,
                title: '<img src="styles/legend/RumahWarga_20.png" /> Rumah Warga '
            });
var format_TPU_21 = new ol.format.GeoJSON();
var features_TPU_21 = format_TPU_21.readFeatures(json_TPU_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPU_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_21.addFeatures(features_TPU_21);
var lyr_TPU_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_21, 
                style: style_TPU_21,
                popuplayertitle: 'TPU',
                interactive: true,
                title: '<img src="styles/legend/TPU_21.png" /> TPU'
            });
var format_FasilitasLain_22 = new ol.format.GeoJSON();
var features_FasilitasLain_22 = format_FasilitasLain_22.readFeatures(json_FasilitasLain_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasLain_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasLain_22.addFeatures(features_FasilitasLain_22);
var lyr_FasilitasLain_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasLain_22, 
                style: style_FasilitasLain_22,
                popuplayertitle: 'Fasilitas Lain',
                interactive: true,
                title: '<img src="styles/legend/FasilitasLain_22.png" /> Fasilitas Lain'
            });
var format_UMKM_23 = new ol.format.GeoJSON();
var features_UMKM_23 = format_UMKM_23.readFeatures(json_UMKM_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_23.addFeatures(features_UMKM_23);
var lyr_UMKM_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_23, 
                style: style_UMKM_23,
                popuplayertitle: 'UMKM',
                interactive: true,
                title: '<img src="styles/legend/UMKM_23.png" /> UMKM'
            });
var format_TmptIbadah_24 = new ol.format.GeoJSON();
var features_TmptIbadah_24 = format_TmptIbadah_24.readFeatures(json_TmptIbadah_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TmptIbadah_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TmptIbadah_24.addFeatures(features_TmptIbadah_24);
var lyr_TmptIbadah_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TmptIbadah_24, 
                style: style_TmptIbadah_24,
                popuplayertitle: 'Tmpt Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TmptIbadah_24.png" /> Tmpt Ibadah'
            });
var format_FslitasPendidikan_25 = new ol.format.GeoJSON();
var features_FslitasPendidikan_25 = format_FslitasPendidikan_25.readFeatures(json_FslitasPendidikan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FslitasPendidikan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FslitasPendidikan_25.addFeatures(features_FslitasPendidikan_25);
var lyr_FslitasPendidikan_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FslitasPendidikan_25, 
                style: style_FslitasPendidikan_25,
                popuplayertitle: 'Fslitas Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FslitasPendidikan_25.png" /> Fslitas Pendidikan'
            });
var format_FasilitasKesehatan_26 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_26 = format_FasilitasKesehatan_26.readFeatures(json_FasilitasKesehatan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_26.addFeatures(features_FasilitasKesehatan_26);
var lyr_FasilitasKesehatan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_26, 
                style: style_FasilitasKesehatan_26,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_26.png" /> Fasilitas Kesehatan'
            });
var format_RumahEkarisma_27 = new ol.format.GeoJSON();
var features_RumahEkarisma_27 = format_RumahEkarisma_27.readFeatures(json_RumahEkarisma_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahEkarisma_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahEkarisma_27.addFeatures(features_RumahEkarisma_27);
var lyr_RumahEkarisma_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahEkarisma_27, 
                style: style_RumahEkarisma_27,
                popuplayertitle: 'Rumah Ekarisma',
                interactive: true,
                title: '<img src="styles/legend/RumahEkarisma_27.png" /> Rumah Ekarisma'
            });
var format_KantorBalaiDesa_28 = new ol.format.GeoJSON();
var features_KantorBalaiDesa_28 = format_KantorBalaiDesa_28.readFeatures(json_KantorBalaiDesa_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorBalaiDesa_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBalaiDesa_28.addFeatures(features_KantorBalaiDesa_28);
var lyr_KantorBalaiDesa_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorBalaiDesa_28, 
                style: style_KantorBalaiDesa_28,
                popuplayertitle: 'Kantor Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/KantorBalaiDesa_28.png" /> Kantor Balai Desa'
            });
var format_RumahKepalaDesa_29 = new ol.format.GeoJSON();
var features_RumahKepalaDesa_29 = format_RumahKepalaDesa_29.readFeatures(json_RumahKepalaDesa_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKepalaDesa_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKepalaDesa_29.addFeatures(features_RumahKepalaDesa_29);
var lyr_RumahKepalaDesa_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKepalaDesa_29, 
                style: style_RumahKepalaDesa_29,
                popuplayertitle: 'Rumah Kepala Desa',
                interactive: true,
                title: '<img src="styles/legend/RumahKepalaDesa_29.png" /> Rumah Kepala Desa'
            });
var format_AliranSungai_30 = new ol.format.GeoJSON();
var features_AliranSungai_30 = format_AliranSungai_30.readFeatures(json_AliranSungai_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AliranSungai_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AliranSungai_30.addFeatures(features_AliranSungai_30);
var lyr_AliranSungai_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AliranSungai_30, 
                style: style_AliranSungai_30,
                popuplayertitle: 'AliranSungai',
                interactive: true,
                title: '<img src="styles/legend/AliranSungai_30.png" /> AliranSungai'
            });
var format_JalanKecil_31 = new ol.format.GeoJSON();
var features_JalanKecil_31 = format_JalanKecil_31.readFeatures(json_JalanKecil_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKecil_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKecil_31.addFeatures(features_JalanKecil_31);
var lyr_JalanKecil_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKecil_31, 
                style: style_JalanKecil_31,
                popuplayertitle: 'Jalan Kecil',
                interactive: true,
                title: '<img src="styles/legend/JalanKecil_31.png" /> Jalan Kecil'
            });
var format_JalanPerum_32 = new ol.format.GeoJSON();
var features_JalanPerum_32 = format_JalanPerum_32.readFeatures(json_JalanPerum_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerum_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerum_32.addFeatures(features_JalanPerum_32);
var lyr_JalanPerum_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerum_32, 
                style: style_JalanPerum_32,
                popuplayertitle: 'Jalan Perum',
                interactive: true,
                title: '<img src="styles/legend/JalanPerum_32.png" /> Jalan Perum'
            });
var format_JlDesa_33 = new ol.format.GeoJSON();
var features_JlDesa_33 = format_JlDesa_33.readFeatures(json_JlDesa_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlDesa_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlDesa_33.addFeatures(features_JlDesa_33);
var lyr_JlDesa_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlDesa_33, 
                style: style_JlDesa_33,
                popuplayertitle: 'Jl.Desa',
                interactive: true,
                title: '<img src="styles/legend/JlDesa_33.png" /> Jl.Desa'
            });
var format_JlUtamaashp_34 = new ol.format.GeoJSON();
var features_JlUtamaashp_34 = format_JlUtamaashp_34.readFeatures(json_JlUtamaashp_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlUtamaashp_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlUtamaashp_34.addFeatures(features_JlUtamaashp_34);
var lyr_JlUtamaashp_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlUtamaashp_34, 
                style: style_JlUtamaashp_34,
                popuplayertitle: 'Jl.Utamaashp',
                interactive: true,
                title: '<img src="styles/legend/JlUtamaashp_34.png" /> Jl.Utamaashp'
            });
var format_desa_bantarwuni_poly_35 = new ol.format.GeoJSON();
var features_desa_bantarwuni_poly_35 = format_desa_bantarwuni_poly_35.readFeatures(json_desa_bantarwuni_poly_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_bantarwuni_poly_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_bantarwuni_poly_35.addFeatures(features_desa_bantarwuni_poly_35);
var lyr_desa_bantarwuni_poly_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_bantarwuni_poly_35, 
                style: style_desa_bantarwuni_poly_35,
                popuplayertitle: 'desa_bantarwuni_poly',
                interactive: true,
                title: '<img src="styles/legend/desa_bantarwuni_poly_35.png" /> desa_bantarwuni_poly'
            });
var format_Bantarwuni_36 = new ol.format.GeoJSON();
var features_Bantarwuni_36 = format_Bantarwuni_36.readFeatures(json_Bantarwuni_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bantarwuni_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bantarwuni_36.addFeatures(features_Bantarwuni_36);
var lyr_Bantarwuni_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bantarwuni_36, 
                style: style_Bantarwuni_36,
                popuplayertitle: 'Bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/Bantarwuni_36.png" /> Bantarwuni'
            });
var format_BatasKecamatanKembaran_37 = new ol.format.GeoJSON();
var features_BatasKecamatanKembaran_37 = format_BatasKecamatanKembaran_37.readFeatures(json_BatasKecamatanKembaran_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanKembaran_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanKembaran_37.addFeatures(features_BatasKecamatanKembaran_37);
var lyr_BatasKecamatanKembaran_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanKembaran_37, 
                style: style_BatasKecamatanKembaran_37,
                popuplayertitle: 'Batas Kecamatan Kembaran',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanKembaran_37.png" /> Batas Kecamatan Kembaran'
            });
var group_Line = new ol.layer.Group({
                                layers: [lyr_AliranSungai_30,lyr_JalanKecil_31,lyr_JalanPerum_32,lyr_JlDesa_33,lyr_JlUtamaashp_34,],
                                fold: 'close',
                                title: 'Line'});
var group_Pointt = new ol.layer.Group({
                                layers: [lyr_LapanganDesaBantarwuni_19,lyr_RumahWarga_20,lyr_TPU_21,lyr_FasilitasLain_22,lyr_UMKM_23,lyr_TmptIbadah_24,lyr_FslitasPendidikan_25,lyr_FasilitasKesehatan_26,lyr_RumahEkarisma_27,lyr_KantorBalaiDesa_28,lyr_RumahKepalaDesa_29,],
                                fold: 'close',
                                title: 'Pointt'});
var group_RumahRW = new ol.layer.Group({
                                layers: [lyr_RumahRW02_18,],
                                fold: 'close',
                                title: 'Rumah RW'});
var group_RumahRT = new ol.layer.Group({
                                layers: [lyr_RumahRT06_16,lyr_Rumahrt6_17,],
                                fold: 'close',
                                title: 'Rumah RT'});
var group_RW = new ol.layer.Group({
                                layers: [lyr_BatasWilayahRw05_11,lyr_BatasWilayahRw04_12,lyr_BatasWilayahRw03_13,lyr_BatasWilayahRw02_14,lyr_BatasWilayahRw01_15,],
                                fold: 'close',
                                title: 'RW'});
var group_RT = new ol.layer.Group({
                                layers: [lyr_RT013RW05_6,lyr_RT0104RW04_7,lyr_RT0105RW03_8,lyr_RT0107Rw02_9,lyr_RT0107RW01_10,],
                                fold: 'open',
                                title: 'RT'});

lyr_GoogleEarthSatelite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Sawah_2.setVisible(true);lyr_Lapang_3.setVisible(true);lyr_BatasWilayahDesaBantarwuni_4.setVisible(true);lyr_batasdesa_5.setVisible(true);lyr_RT013RW05_6.setVisible(true);lyr_RT0104RW04_7.setVisible(true);lyr_RT0105RW03_8.setVisible(true);lyr_RT0107Rw02_9.setVisible(true);lyr_RT0107RW01_10.setVisible(true);lyr_BatasWilayahRw05_11.setVisible(true);lyr_BatasWilayahRw04_12.setVisible(true);lyr_BatasWilayahRw03_13.setVisible(true);lyr_BatasWilayahRw02_14.setVisible(true);lyr_BatasWilayahRw01_15.setVisible(true);lyr_RumahRT06_16.setVisible(true);lyr_Rumahrt6_17.setVisible(true);lyr_RumahRW02_18.setVisible(true);lyr_LapanganDesaBantarwuni_19.setVisible(true);lyr_RumahWarga_20.setVisible(true);lyr_TPU_21.setVisible(true);lyr_FasilitasLain_22.setVisible(true);lyr_UMKM_23.setVisible(true);lyr_TmptIbadah_24.setVisible(true);lyr_FslitasPendidikan_25.setVisible(true);lyr_FasilitasKesehatan_26.setVisible(true);lyr_RumahEkarisma_27.setVisible(true);lyr_KantorBalaiDesa_28.setVisible(true);lyr_RumahKepalaDesa_29.setVisible(true);lyr_AliranSungai_30.setVisible(true);lyr_JalanKecil_31.setVisible(true);lyr_JalanPerum_32.setVisible(true);lyr_JlDesa_33.setVisible(true);lyr_JlUtamaashp_34.setVisible(true);lyr_desa_bantarwuni_poly_35.setVisible(true);lyr_Bantarwuni_36.setVisible(true);lyr_BatasKecamatanKembaran_37.setVisible(true);
var layersList = [lyr_GoogleEarthSatelite_0,lyr_GoogleMaps_1,lyr_Sawah_2,lyr_Lapang_3,lyr_BatasWilayahDesaBantarwuni_4,lyr_batasdesa_5,group_RT,group_RW,group_RumahRT,group_RumahRW,group_Pointt,group_Line,lyr_desa_bantarwuni_poly_35,lyr_Bantarwuni_36,lyr_BatasKecamatanKembaran_37];
lyr_Sawah_2.set('fieldAliases', {'id': 'id', 'Pemilik': 'Pemilik', 'Luas': 'Luas', });
lyr_Lapang_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_BatasWilayahDesaBantarwuni_4.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kode Pos': 'Kode Pos', });
lyr_batasdesa_5.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kode Pos': 'Kode Pos', });
lyr_RT013RW05_6.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RT0104RW04_7.set('fieldAliases', {'Nama': 'Nama', 'RW': 'RW', });
lyr_RT0105RW03_8.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RT0107Rw02_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Rw': 'Rw', });
lyr_RT0107RW01_10.set('fieldAliases', {'Nama': 'Nama', 'Rw': 'Rw', });
lyr_BatasWilayahRw05_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah Rt': 'Jumlah Rt', });
lyr_BatasWilayahRw04_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_BatasWilayahRw03_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah rt': 'Jumlah rt', });
lyr_BatasWilayahRw02_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_BatasWilayahRw01_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_RumahRT06_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_Rumahrt6_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_RumahRW02_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_LapanganDesaBantarwuni_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_RumahWarga_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TPU_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_FasilitasLain_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', });
lyr_UMKM_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_TmptIbadah_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_FslitasPendidikan_25.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp.': 'No Tlp.', 'Kode Pos': 'Kode Pos', });
lyr_FasilitasKesehatan_26.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_RumahEkarisma_27.set('fieldAliases', {'id': 'id', 'Alamat': 'Alamat', });
lyr_KantorBalaiDesa_28.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_RumahKepalaDesa_29.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'No. Tlp': 'No. Tlp', 'Kode Pos': 'Kode Pos', });
lyr_AliranSungai_30.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanKecil_31.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanPerum_32.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlDesa_33.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlUtamaashp_34.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_desa_bantarwuni_poly_35.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access_roo': 'access_roo', 'name': 'name', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', });
lyr_Bantarwuni_36.set('fieldAliases', {'id': 'id', });
lyr_BatasKecamatanKembaran_37.set('fieldAliases', {'Nama': 'Nama', 'Desa/Kel.': 'Desa/Kel.', 'Kabupaten': 'Kabupaten', 'Kode Bps': 'Kode Bps', });
lyr_Sawah_2.set('fieldImages', {'id': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Lapang_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_BatasWilayahDesaBantarwuni_4.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_batasdesa_5.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RT013RW05_6.set('fieldImages', {'RW': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT0104RW04_7.set('fieldImages', {'Nama': '', 'RW': '', });
lyr_RT0105RW03_8.set('fieldImages', {'RW': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT0107Rw02_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Rw': 'TextEdit', });
lyr_RT0107RW01_10.set('fieldImages', {'Nama': 'TextEdit', 'Rw': 'TextEdit', });
lyr_BatasWilayahRw05_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah Rt': 'TextEdit', });
lyr_BatasWilayahRw04_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_BatasWilayahRw03_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah rt': 'TextEdit', });
lyr_BatasWilayahRw02_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_BatasWilayahRw01_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_RumahRT06_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_Rumahrt6_17.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Kode Pos': '', });
lyr_RumahRW02_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_LapanganDesaBantarwuni_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_RumahWarga_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TPU_21.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', });
lyr_FasilitasLain_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', });
lyr_UMKM_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_TmptIbadah_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_FslitasPendidikan_25.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp.': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_FasilitasKesehatan_26.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RumahEkarisma_27.set('fieldImages', {'id': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_KantorBalaiDesa_28.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RumahKepalaDesa_29.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'No. Tlp': '', 'Kode Pos': '', });
lyr_AliranSungai_30.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanKecil_31.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanPerum_32.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JlDesa_33.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JlUtamaashp_34.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_desa_bantarwuni_poly_35.set('fieldImages', {'osm_id': '', 'osm_type': '', 'building': '', 'access_roo': '', 'name': '', 'roof_mater': '', 'building_m': '', 'addr_house': '', 'addr_stree': '', });
lyr_Bantarwuni_36.set('fieldImages', {'id': 'TextEdit', });
lyr_BatasKecamatanKembaran_37.set('fieldImages', {'Nama': 'TextEdit', 'Desa/Kel.': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kode Bps': 'TextEdit', });
lyr_Sawah_2.set('fieldLabels', {'id': 'no label', 'Pemilik': 'no label', 'Luas': 'no label', });
lyr_Lapang_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_BatasWilayahDesaBantarwuni_4.set('fieldLabels', {'Nama': 'no label', 'Kecamatan': 'no label', 'Kode Pos': 'no label', });
lyr_batasdesa_5.set('fieldLabels', {'Nama': 'no label', 'Kecamatan': 'no label', 'Kode Pos': 'no label', });
lyr_RT013RW05_6.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RT0104RW04_7.set('fieldLabels', {'Nama': 'no label', 'RW': 'no label', });
lyr_RT0105RW03_8.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RT0107Rw02_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Rw': 'no label', });
lyr_RT0107RW01_10.set('fieldLabels', {'Nama': 'no label', 'Rw': 'no label', });
lyr_BatasWilayahRw05_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah Rt': 'no label', });
lyr_BatasWilayahRw04_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_BatasWilayahRw03_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah rt': 'no label', });
lyr_BatasWilayahRw02_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_BatasWilayahRw01_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_RumahRT06_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_Rumahrt6_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_RumahRW02_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_LapanganDesaBantarwuni_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_RumahWarga_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TPU_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_FasilitasLain_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', });
lyr_UMKM_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_TmptIbadah_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_FslitasPendidikan_25.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp.': 'no label', 'Kode Pos': 'no label', });
lyr_FasilitasKesehatan_26.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_RumahEkarisma_27.set('fieldLabels', {'id': 'no label', 'Alamat': 'no label', });
lyr_KantorBalaiDesa_28.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_RumahKepalaDesa_29.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'No. Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_AliranSungai_30.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JalanKecil_31.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JalanPerum_32.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlDesa_33.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlUtamaashp_34.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_desa_bantarwuni_poly_35.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access_roo': 'no label', 'name': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', });
lyr_Bantarwuni_36.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_BatasKecamatanKembaran_37.set('fieldLabels', {'Nama': 'no label', 'Desa/Kel.': 'no label', 'Kabupaten': 'no label', 'Kode Bps': 'header label - visible with data', });
lyr_BatasKecamatanKembaran_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});