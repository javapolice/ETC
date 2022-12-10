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
                borderWidth: 2,
                borderSkipped: false,
                borderRadius: Number.MAX_VALUE,
            },
            {
                label: 'Dataset 2',
                data: [0, 20, 35, 12, 21, -34, 20],
                borderColor: 'dodgerblue',
                backgroundColor: 'dodgerblue',
                borderWidth: 2,
                borderSkipped: false,
                borderRadius: Number.MAX_VALUE,
            },
            {
                label: 'Dataset 3',
                data: [-20, 30, 35, 12, -20, 30, 15],
                borderColor: 'green',
                backgroundColor: 'green',
                borderWidth: 2,
                borderSkipped: false,
                borderRadius: Number.MAX_VALUE,
            },
        ]
    };

    const config = [{
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
                    text: 'Chart.js Bar Chart',
                    position: 'top',
                }
            }
        }
    },
    {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
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
