window.addEventListener("load", function(){
  this.document.getElementById("loader").classList.toggle("loader2");
  this.document.getElementById("carga").classList.toggle("cargado");
})


// Gráfico de estadísticas
const ctx = document.getElementById('neurodiversityChart').getContext('2d');
const neurodiversityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Autismo', 'ADHD', 'Dislexia', 'Otros'],
        datasets: [{
            label: 'Prevalencia',
            data: [1, 2, 1.5, 0.5], // datos de ejemplo
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
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


(function() {
    'use strict';
    var $message = $('#message');
      
    $message.on('mouseenter', function(){
      
      setTimeout(function(){
        $message.find('.outside').html('AUTISMO');
      },200);
    });
    
    $message.on('mouseleave', function(){
      
      setTimeout(function(){
        $message.find('.outside').html('AUTISMO');
      },250);
    });
  }());