var colors = ['#f4d03f'];
$( '#CAN_bar' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (% of Tax revenue)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Canada\'s tax revenue'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Taxes on goods and services',
      'Taxes on income, profits and capital gains',
      'Taxes on international trade',
      'Taxes on exports',
      'Other taxes'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    //max: 15,
    title: {
      text: '(% of Tax revenue)'
    }
  },
  
    plotOptions: {
        pie: {
            colors: colors
        },
        column: {
          pointPadding: 0.3,
          borderWidth: 0
      }
    },
    colors:colors,
    series: [{
        type: 'column',
        name: '% of Tax revenue',
        data: [0, 97.2, 2.8, 0, 0] 
    }]
  });

