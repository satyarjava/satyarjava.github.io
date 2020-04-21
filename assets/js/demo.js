type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDashboardPageCharts: function() {
    gradientChartOptionsConfigurationWithTooltip1 = {
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'top'
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
                        type: "linear",
                        display: true,
                        position: "left",
                        id: "y-axis-1",
                        
                        scaleLabel: {
                          display: true,
                          labelString: 'Jumlah (kumulatif-garis)'
                        },
                        gridLines: {
                          drawBorder: true,
                          color: 'rgba(225,78,202,0.1)',
                          zeroLineColor: 'rgba(225,78,202,0.1)',
                        },
                        ticks: {
                          suggestedMin: 0,
                          suggestedMax: 80,
                          padding: 0,
                          fontColor: "#9a9a9a"
                        },
                    }, {
                        type: "linear",
                        display: true,
                        position: "right",
                        id: "y-axis-2",

                        scaleLabel: {
                          display: true,
                          labelString: 'Jumlah (harian-batang)'
                        },
                        gridLines: {
                          drawBorder: true,
                          color: 'rgba(225,78,202,0.1)',
                          zeroLineColor: 'rgba(225,78,202,0.1)',
                        },
                        ticks: {
                          suggestedMin: 0,
                          suggestedMax: 8,
                          padding: 0,
                          fontColor: "#9a9a9a"
                        },
                    }],
        xAxes: [{
          barPercentage: 1.1,
          scaleLabel: {
            display: true,
            labelString: 'Hari ke- (sejak kasus pertama)'
          },
          gridLines: {
            drawBorder: true,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "black",
          },
          ticks: {
            maxTicksLimit: 8,
            maxRotation: 0,
            padding: 0,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var chart_labels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    var chart_diy_kasus = [0,1,1,1,2,4,4,5,5,5,6,18,18,19,19,19,19,24,28,29,31,34,35,37,38,38,40,40,41,48,55,61,62,63,64,67,67,69,72];
    var chart_diy_kematian = [0,0,0,0,0,0,1,0,1,0,1,2,0,0,2,0,3,0,2,1,0,0,2,1,4,1,2,1,2,0,0,0,4,3,2,4,4,2,2];
    var chart_diy_pulih = [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,3,0,0,0,1,0,3,3,0,4,1,4,0,3,2,0,1,2];
    
    var ctx = document.getElementById("chartdiy").getContext('2d');
    var config = {
      type: 'bar', 
      data: {
      labels: chart_labels,

        datasets: [{
          type: 'line',
          label: "Kasus",
          fill: false,
          backgroundColor: '#d346b1',
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          data: chart_diy_kasus,
          yAxisID: "y-axis-1",
          order: 1
          },{

          type: 'bar',
          label: "Kematian",
          fill: false,
          backgroundColor: 'black',
          borderColor: 'black',
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: 'black',
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          data: chart_diy_kematian,
          yAxisID: "y-axis-2",
          order: 2,
          },{

          type: 'bar',
          label: "Kepulihan",
          fill: false,
          backgroundColor: '#2bd600',
          borderColor: '#2bd600',
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          data: chart_diy_pulih,
          yAxisID: "y-axis-2",
          order: 3,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltip1
    };
    var myChartData = new Chart(ctx, config);
  },
};