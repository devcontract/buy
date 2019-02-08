
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 9],
  ['Eat', 2],
  ['Programming', 4],
  ['Play With Daughter', 3],
  ['Sleep', 6],
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':'auto', 'height':'auto'};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}
