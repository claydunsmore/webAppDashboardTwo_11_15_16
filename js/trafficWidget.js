/**
 * Created by User on 10/9/2016.
 */

window.onload = function() {
var ctx = document.getElementById('trafficWidget').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-25', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Traffic',
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250],
            backgroundColor: "rgba(113, 113, 198, 0.4)",
            pointBorderColor: "rgba(113, 113, 198, 0.4)",
            pointBackgroundColor: "#fff",
            pointRadius: 9,
            pointBorderWidth: 3,
            lineTension: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxOne = document.getElementById('dailyTraffic').getContext('2d');
var myChartOne = new Chart(ctxOne, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: "rgba(113, 113, 198, 1)",
            pointBorderColor: "rgba(113, 113, 198, 0.4)",
            pointBackgroundColor: "#fff",
            pointRadius: 9,
            pointBorderWidth: 3,
            lineTension: 0
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

    var ctxTwo = document.getElementById('mobileUsers').getContext('2d');
    var myChartTwo = new Chart(ctxTwo, {
        type: 'doughnut',
        data: {
            labels: ['phones', 'tablets', 'desktop'],
            datasets:[{
                backgroundColor: ['#16A085', '#7171C6', '#00f'],
                data: [15, 25, 60]
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'right'
            }
        }

    });
};
