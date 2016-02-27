/**
 * Created by John Wishon on 2/27/2016.
 */

    google.charts.load('current', {packages: ['map']});
google.charts.setOnLoadCallback(drawMap);

function drawMap () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Address');
    data.addColumn('string', 'Location');
    data.addColumn('string', 'Marker')

    data.addRows([
        ['New York City NY, United States', 'New York',   'blue' ],
        ['Scranton PA, United States',      'Scranton',   'green'],
        ['Washington DC, United States',    'Washington', 'pink' ],
        ['Philadelphia PA, United States',  'Philly',     'green'],
        ['Pittsburgh PA, United States',    'Pittsburgh', 'green'],
        ['Buffalo NY, United States',       'Buffalo',    'blue' ],
        ['Baltimore MD, United States',     'Baltimore',  'pink' ],
        ['Albany NY, United States',        'Albany',     'blue' ],
        ['Allentown PA, United States',     'Allentown',  'green']
    ]);
    var url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

    var options = {
        zoomLevel: 6,
        showTip: true,
        useMapTypeControl: true,
        icons: {
            blue: {
                normal:   url + 'Map-Marker-Ball-Azure-icon.png',
                selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'
            },
            green: {
                normal:   url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',
                selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'
            },
            pink: {
                normal:   url + 'Map-Marker-Ball-Pink-icon.png',
                selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'
            }
        }
    };
    var map = new google.visualization.Map(document.getElementById('map_div'));

    map.draw(data, options);
}
