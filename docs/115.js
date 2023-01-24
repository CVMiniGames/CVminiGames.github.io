"use strict";(this.webpackChunkname=this.webpackChunkname||[]).push([[115],{115:r=>{r.exports="<!DOCTYPE html>\r\n<head>    \r\n    <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />\r\n    <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>\r\n    <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.js\"><\/script>\r\n    <script src=\"https://code.jquery.com/jquery-1.12.4.min.js\"><\/script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"><\/script> \r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\"/> \r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\r\n    <style> #map{ position: relative; width: 100.0%; height: 100.0%; left: 0.0%; top: 0.0%; } </style>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js\"><\/script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js\"><\/script>\r\n</head>\r\n<body> <div id=\"map\" ></div> \r\n    <style>#map-esri { height: 100%; } \r\n        .legend {\r\n        line-height: 18px !important;\r\n        color: #555 !important;\r\n        }\r\n        .legend i {\r\n        width: 18px !important;\r\n        height: 18px !important;\r\n        float: left !important;\r\n        margin-right: 8px !important;\r\n        }\r\n        .info {\r\n        background: white !important;\r\n        background: rgba(255,255,255,0.8) !important;\r\n        box-shadow: 0 0 15px rgba(0,0,0,0.2) !important;\r\n        border-radius: 5px !important;\r\n        margin: 8px !important;\r\n        padding: 8px !important;\r\n        }\r\n        .info h4 {\r\n        margin: 0 0 5px !important;\r\n        color: #777 !important;\r\n        }</style>\r\n</body>\r\n<script async> (async function() {\r\n\r\n    let parcels = (await d3.json(`https://www.cryptovoxels.com/api/parcels/search.json`) )['parcels']\r\n    let sales = (await d3.csv(`https://raw.githubusercontent.com/predictcrypto/pins/master/cryptovoxels_all_orders/data.csv`)).reverse();\r\n    var map = L.map( \"map\", { center: [0.0, 0.0], crs: L.CRS.EPSG3857, zoom: 10, zoomControl: true, preferCanvas: false } );\r\n    L.control.scale().addTo(map);\r\n    // delete Object.assign(parcels, {['features']: parcels['parcels'] })['parcels'];\r\n\r\n    var tile_layer = L.tileLayer( \r\n        \"https://map.cryptovoxels.com/tile?z={z}\\u0026x={x}\\u0026y={y}\", {\r\n            \"attribution\": \"Map data \\u0026copy; Cryptovoxels\", \r\n            \"detectRetina\": false, \"maxNativeZoom\": 18, \r\n            \"maxZoom\": 18, \"minZoom\": 0, \"noWrap\": false, \r\n            \"opacity\": 1, \"subdomains\": \"abc\", \"tms\": false\r\n    } ).addTo(map);\r\n\r\n    let featureTemplate = {\r\n        'coordinates': [],\r\n        'properties': [],\r\n        'type': 'polygon'\r\n    }\r\n\r\n    /********************************************************\r\n    * Converts Exponential (e-Notation) Numbers to Decimals\r\n    ********************************************************\r\n    * @function numberExponentToLarge()\r\n    * @version  1.00\r\n    * @param   {string}  Number in exponent format.\r\n    *                   (other formats returned as is).\r\n    * @return  {string}  Returns a decimal number string.\r\n    * @author  Mohsen Alyafei\r\n    * @date    12 Jan 2020\r\n    *\r\n    * Notes: No check is made for NaN or undefined inputs\r\n    *\r\n    *******************************************************/\r\n\r\n    function numberExponentToLarge(numIn) {\r\n    numIn +=\"\";                                            // To cater to numric entries\r\n    var sign=\"\";                                           // To remember the number sign\r\n    numIn.charAt(0)==\"-\" && (numIn =numIn.substring(1),sign =\"-\"); // remove - sign & remember it\r\n    var str = numIn.split(/[eE]/g);                        // Split numberic string at e or E\r\n    if (str.length<2) return sign+numIn;                   // Not an Exponent Number? Exit with orginal Num back\r\n    var power = str[1];                                    // Get Exponent (Power) (could be + or -)\r\n\r\n    var deciSp = 1.1.toLocaleString().substring(1,2);  // Get Deciaml Separator\r\n    str = str[0].split(deciSp);                        // Split the Base Number into LH and RH at the decimal point\r\n    var baseRH = str[1] || \"\",                         // RH Base part. Make sure we have a RH fraction else \"\"\r\n        baseLH = str[0];                               // LH base part.\r\n\r\n    if (power>=0) {   // ------- Positive Exponents (Process the RH Base Part)\r\n        if (power> baseRH.length) baseRH +=\"0\".repeat(power-baseRH.length); // Pad with \"0\" at RH\r\n        baseRH = baseRH.slice(0,power) + deciSp + baseRH.slice(power);      // Insert decSep at the correct place into RH base\r\n        if (baseRH.charAt(baseRH.length-1) ==deciSp) baseRH =baseRH.slice(0,-1); // If decSep at RH end? => remove it\r\n\r\n    } else {         // ------- Negative exponents (Process the LH Base Part)\r\n        num= Math.abs(power) - baseLH.length;                               // Delta necessary 0's\r\n        if (num>0) baseLH = \"0\".repeat(num) + baseLH;                       // Pad with \"0\" at LH\r\n        baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power);     // Insert \".\" at the correct place into LH base\r\n        if (baseLH.charAt(0) == deciSp) baseLH=\"0\" + baseLH;                // If decSep at LH most? => add \"0\"\r\n\r\n    }\r\n    // Rremove leading and trailing 0's and Return the long number (with sign)\r\n    return sign + (baseLH + baseRH).replace(/^0*(\\d+|\\d+\\.\\d+?)\\.?0*$/,\"$1\");\r\n    }\r\n    \r\n    let minPrice = 10 \r\n    let minVol = 1000\r\n    let minP2V = 1\r\n    let maxPrice = 0 \r\n    let maxVol = 0\r\n    let maxP2V = 0\r\n    let geojson = sales.map((o, i) => {  \r\n        let parcel = 0\r\n        for(var j = 0; j < parcels.length; j++) {\r\n            if(parcels[j].id == o.parcel_id) {\r\n                parcel = parcels[j]\r\n                parcels.splice(j, 1);\r\n                // price\r\n                // volume \r\n                // price per volume\r\n                break;\r\n            }\r\n        }\r\n        if(!parcel.id){ return false} \r\n        let p2v = o.price_per_volume_ETH == 'NA' ? 'NA' : numberExponentToLarge(o.price_per_volume_ETH)\r\n        let p = o.price_ETH\r\n        let v = o.volumeInVoxels\r\n        minPrice = p && p < minPrice ? p : minPrice;\r\n        minVol = v != 'NA' && v < minVol ? v : minVol;\r\n        minP2V = p2v != 'NA' && p2v < minP2V ? p2v : minP2V;\r\n        maxPrice = p && p > maxPrice ? p : maxPrice;\r\n        maxVol = v != 'NA' && v > maxVol ? v : maxVol;\r\n        maxP2V = p2v != 'NA' && p2v > maxP2V ? p2v : maxP2V; \r\n        return !parcel.id ? false : { \r\n        'type': 'Polygon', \r\n        'coordinates': parcel.geometry.coordinates, \r\n        'properties': {\r\n            'id': o.parcel_id,\r\n            'address': o.address,\r\n            'price_ETH': p,\r\n            'volumeInVoxels': v,\r\n            'price_per_volume_ETH': p2v\r\n        }\r\n    } }).filter(Boolean); \r\n    \r\n    // https://gka.github.io/chroma.js/#scale-classes\r\n    // ['darkblue', 'blue', 'lightblue','lavender', 'pink', 'red', 'darkred']\r\n    let getPriceColor = chroma.scale(['white', 'blue', 'green', 'red']).domain([minPrice,maxPrice*.2]).classes(0,7,15,30 )\r\n    //let getPriceColor = chroma.scale( ['yellow','blue','black', 'red', 'green'] ).domain([minPrice,maxPrice]).classes([0,5,10,15])\r\n    let getVolColor = chroma.scale( ['white', 'blue', 'green', 'red'] ).domain([minVol,maxVol]) //.classes([0,33,65,100])\r\n    let getP2VColor = chroma.scale( ['white', 'blue', 'green', 'red'] ).domain([minP2V,maxP2V]) //.classes([0,33,65,100])\r\n    \r\n    let getColor = getPriceColor\r\n    let colorUsing = 'price_ETH'\r\n\r\n    styleESRI = function ( feature ) { \r\n        let x = getColor(feature.geometry.properties[colorUsing]).rgb() \r\n        x = \"#\" + ((1 << 24) + (x[0] << 16) + (x[1] << 8) + x[2]).toString(16).slice(1) \r\n        return {\"weight\":0.5, 'color':'black', 'fillColor': x, 'fillOpacity':0.75 }\r\n    }\r\n\r\n    highlightFeatureESRI = function ( e ) {  \r\n        var layer = e.target;\r\n        layer.setStyle({ weight: 5, color: '#666', dashArray: '', fillOpacity: 1 });\r\n        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) { layer.bringToFront() }\r\n        info.update(layer.feature.geometry.properties);\r\n        // layer.bindTooltip( `<div><b> test123 </b></div>`, {\"sticky\": true} )\r\n    }\r\n\r\n    resetHighlightESRI = function ( e ) {\r\n        var layer = e.target \r\n        layer.setStyle( styleESRI( e.target.feature ) )  \r\n    }\r\n\r\n    zoomToFeatureESRI = function ( feature, layer ) { \r\n        // if (screen.width > 800) { // map.fitBounds(e.target.getBounds());\r\n        // var layer = e.target;\r\n        let p = layer.feature.geometry.properties\r\n        var popupContent = `\r\n            <p>\r\n                <b>Address:</b> ${p.address} <br> \r\n                <b>Parcel:</b> ${p.id} <br>   \r\n                <b>price_ETH:</b> ${p.price_ETH}\r\n                <b>volumeInVoxels:</b> ${p.volumeInVoxels}\r\n                <b>price_per_volume_ETH:</b> ${p.price_per_volume_ETH}\r\n                <button> <a href='https://www.cryptovoxels.com/parcels/${p.id}' target=\"_blank\" rel=\"noopener noreferrer\"> Visit! </button>\r\n            </p>\r\n        `;\r\n        layer.bindPopup(popupContent); \r\n    }\r\n\r\n    onEachFeatureESRI = function ( feature, layer ) { \r\n        // console.log('onEachFeatureESRI', feature, layer);\r\n        layer.on({\r\n            mouseover: highlightFeatureESRI,\r\n            mouseout: resetHighlightESRI,\r\n            click: zoomToFeatureESRI(feature, layer)\r\n        });\r\n    }\r\n\r\n    geojsonLayer = L.geoJSON(geojson, { \r\n        style: styleESRI,\r\n        onEachFeature: onEachFeatureESRI\r\n    }).addTo(map);\r\n\r\n    function restyleLayer(prop, colorfn) { \r\n        getColor = colorfn\r\n        colorUsing = prop\r\n        geojsonLayer.eachLayer(function(featureInstanceLayer) { \r\n            propertyValue = featureInstanceLayer.feature.properties[prop];\r\n\r\n            // repeating the fn above but again here because I no think too good.\r\n            let x = colorfn(featureInstanceLayer.feature.geometry.properties[colorUsing]).rgb() \r\n            x = \"#\" + ((1 << 24) + (x[0] << 16) + (x[1] << 8) + x[2]).toString(16).slice(1) \r\n\r\n            featureInstanceLayer.setStyle( {'fillColor': x } );\r\n        });\r\n        legend.update(prop);\r\n    } \r\n\r\n    let toggle = L.control({position: 'topright'});\r\n    toggle.onAdd = function(map) {\r\n        this._div = L.DomUtil.create('div', 'info');\r\n        this.update();\r\n        return this._div;\r\n    };\r\n    toggle.update = function() { this._div.innerHTML = `\r\n        <button id='toggle1'>price_ETH</button>\r\n        <button id='toggle2'>volumeInVoxels</button>\r\n        <button id='toggle3'>price_per_volume_ETH</button>` \r\n    };\r\n    toggle.addTo(map);\r\n    document.getElementById(\"toggle1\").addEventListener (\"click\", restyleLayer.bind(event, 'price_ETH', getPriceColor ), false);\r\n    document.getElementById(\"toggle2\").addEventListener (\"click\", restyleLayer.bind(event, 'volumeInVoxels', getVolColor ), false);\r\n    document.getElementById(\"toggle3\").addEventListener (\"click\", restyleLayer.bind(event, 'price_per_volume_ETH', getP2VColor ), false);\r\n\r\n    let info = L.control();\r\n    info.onAdd = function(map) {\r\n        this._div = L.DomUtil.create('div', 'info');\r\n        this.update();\r\n        return this._div;\r\n    };\r\n    info.update = function(props) { this._div.innerHTML = props ? '<b>price_ETH: </b><br />' + props['price_ETH'] : '' };\r\n    info.addTo(map);\r\n\r\n    var legend = L.control({position: 'bottomright'});\r\n    legend.onAdd = function (map) {\r\n        this._div = L.DomUtil.create('div', 'info legend');\r\n        this.update('price_ETH');\r\n        return this._div;\r\n    };\r\n    legend.update = function(prop) { \r\n        grades = [0,2,4,6,8,10,13,15,30]\r\n        if(prop=='volumeInVoxels'){ grades = [0,2000,4000,6000,8000,10000,20000,40000,60000,80000,maxVol] }\r\n        //labels = ['white','blue','black', 'red', 'green'];\r\n        // loop through our density intervals and generate a label with a colored square for each interval\r\n        this._div.innerHTML = ''\r\n        // kludge kludge kludge kludge kludge\r\n        if(prop=='price_per_volume_ETH'){ \r\n            this._div.innerHTML +=`\r\n                <i style=\"background:#FFFFFF\"></i> 0.00000032 <br>\r\n                <i style=\"background:#0000FF\"></i> 0.02572 <br>\r\n                <i style=\"background:#00FF00\"></i> 0.04748 <br>\r\n                <i style=\"background:#FF0000\"></i> 0.06410 <br>\r\n            `\r\n                    \r\n        }\r\n        else{\r\n            for (var i = 0; i < grades.length; i++) {\r\n                this._div.innerHTML +=\r\n                    '<i style=\"background:' + getColor(grades[i] + 1) + '\"></i> ' +\r\n                    grades[i] + (grades[i + 1] ? '<br>' : '+');\r\n            }\r\n        } \r\n    };\r\n    legend.addTo(map); \r\n})(); \r\n<\/script>"}}]);