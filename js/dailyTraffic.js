/**
 * Created by User on 10/14/2016.
 */
var ctxOne = document.getElementById('dailyTraffic').getContext('2d');
var myChart = new Chart(ctxOne, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: "rgba(113, 113, 198, 0.4)",
            pointBorderColor: "rgba(113, 113, 198, 0.4)",
            pointBackgroundColor: "#fff",
            pointRadius: 9,
            pointBorderWidth: 3,
            lineTension: 0
        }]
    }
});