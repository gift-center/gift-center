var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        options: {
            legend: {
            fontColor: "white"},
            scales: {
                yAxes: [{
                    fontColor: "brown",
                    fontSize: 12,
                    ticks: {
                        max: 10,
                        min: 0,
                        beginAtZero: 0,
                        stepSize: 2,
                    }
            }],
    
        }}
    }
});

chart.canvas.parentNode.style.width = '100%';
chart.canvas.parentNode.style.height = '50%';