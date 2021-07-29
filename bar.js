var ctx = document.getElementById('bar-charts');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Shavers', 'Soap', 'Water', 'Coke'],
        datasets: [{
            label: 'Products Ordered',
            data: [150, 120, 100, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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

new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["Shavers", "Soap", "Water", "Coke"],
		datasets: [
			{
				label: "Products Ordered",
				backgroundColor: ["#f15025", "#a610e5", "#2b5cb9", "#740d06"],
				data: [150, 120, 100, 45]
        }
      ]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Predicted Sales'
		}
	}
});

