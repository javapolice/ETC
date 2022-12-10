$(function () {

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [0, -10, 5, -2, 20, 30, 45],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Dataset 2',
                data: [0, 20, 35, 12, 21, -34, 20],
                borderColor: 'dodgerblue',
                backgroundColor: 'dodgerblue',
            },
            {
                label: 'Dataset 3',
                data: [-20, 30, 35, 12, -20, 30, 15],
                borderColor: 'green',
                backgroundColor: 'green',
            },
        ]
    };
    const data2 = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [0, -10, 5, -2, 20, 30, 45],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                stepped: true,
            },
            {
                label: 'Dataset 2',
                data: [0, 20, 35, 12, 21, -34, 20],
                borderColor: 'dodgerblue',
                backgroundColor: 'dodgerblue',
                fill: false,
                stepped: true,
            },
            {
                label: 'Dataset 3',
                data: [-20, 30, 35, 12, -20, 30, 15],
                borderColor: 'green',
                backgroundColor: 'green',
                fill: false,
                stepped: true,
            },
        ]
    };

    const config = [{
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart',
                    position: 'top',
                }
            }
        }
    },
    {
        type: 'line',
        data: data2,
        options: {
            responsive: true,
            interaction: {
                intersect: false,
                axis: 'x'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Stepped Line Chart',
                    position: 'top',
                }
            }
        }
    },
    {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked',
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    },
    {
        type: 'bar',
        data: data2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Border Radious Bar Chart',
                }
            },
        }
    },
];

    var myChart = new Chart(
        $('#myChart'),
        config[0]
    );
    
    $('.button button').on('click', function(e){
        e.preventDefault();
        if(myChart){
           myChart.destroy();
        }
        myChart = new Chart($('#myChart'), config[this.value]);
    })

})
