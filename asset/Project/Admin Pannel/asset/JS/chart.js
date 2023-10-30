// Earning chart
var options = {
  series: [{
  name: 'series1',
  data: [0,10,15,3,15,10,30,6,10]
}, {

}],
  chart: {
  height: 200,
  type: 'area',
  width:'100%',
 
  toolbar: {
    show:false,
  },
},

dataLabels: {
  enabled: false
},

stroke: {
  curve: 'smooth'
},
xaxis: {
  show: false,
  
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
  labels: {
    show: false,
  },
},
yaxis: {
  show: false,
  labels: {
    show: false,
  },
},
grid:{
  show:false,
},
legend: {
  show: false,
},



};

var chart = new ApexCharts(document.querySelector("#charta"), options);
chart.render();



//  weekly chart


      
var options = {
  series: [
  {
    name: 'Actual',
    data: [
      {
        x: 'M',
        y: 2200,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'T',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'W',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'T',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            
          }
        ]
      },
      {
        x: 'F',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 13,
            strokeWidth: 0,
            strokeLineCap: 'round',
           
          }
        ]
      },
      {
        x: 'S',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            
          }
        ]
      },
      
    ]
  }
],
  chart: {
  height:250,
  type: 'bar'
},
plotOptions: {
  bar: {
    columnWidth: '20%'
  }
},

colors: ['rgb(99, 98, 231)'],
dataLabels: {
  enabled: false
},
yaxis: {
  show:true,
},
grid:{
  show:false,
},

legend: {
  show: false,
  showForSingleSeries: true,

}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();


//  yearly-chart
var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 250,
  type: 'line',
  zoom: {
    enabled: false
  }
 
},
dataLabels: {
  enabled: false
},
toolbar:{
  show:false,
},
stroke: {
  width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5]
},
title: {

  align: 'left'
},

grid: {
  show:false,
 
},
xaxis: {
  categories: ['12 Feb','13 Feb','14 Fab'],
},
    labels: {
      rotate: 300,

},
yaxis:{
  show:false,
},
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

  // report-chart
  var options = {
    series: [{
    name:{
      show:false,
    },
    data: [ 2.1, 2.6, 3.7, 4.1, 4.4, 4.4, 4.6,
    
    ]
  },
  {
    name: 'Females',
    data: [-2.1, -2.6, -3.7,-4.1,-4.4,-4.4,-4.6,
      
    ]
  }
  ],
    chart: {
    type: 'bar',
    height:200,
    stacked: true
  },
  colors: ['#6362e7', '#ffc500'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '40%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  
  grid: {
    show:false,
   
  },
 
  yaxis: {
   show:false,
  },
  tooltip: {
    shared: false,
    x: {
      show:false,
    },
    y: {
      show:false,
    }
  },
 
  xaxis: {
   show:false,
    title: {
     show:false,
    },
    labels: {
      show:false,
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();