var ctx = document.getElementById('bubble-chart-canvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'First Dataset',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
                { x: 60, y: 20, r: 5 },
                { x: 80, y: 40, r: 10 },
                { x: 100, y: 60, r: 15 },
                { x: 120, y: 80, r: 10 },
                { x: 40, y: 70, r: 10 },
                { x: 40, y: 60, r: 10 },
                { x: 45, y: 65, r: 10 },
                { x: 66, y: 60, r: 22 },
                { x: 49, y: 65, r: 18 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});