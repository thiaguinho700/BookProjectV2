<template>
    <div>
      <BarChart :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { Bar } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  
  // Registrar os componentes do Chart.js
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default defineComponent({
    name: "BarChart",
    components: {
      BarChart: Bar,
    },  
    data() {
      return {
        chartData: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Data 1",
              backgroundColor: "#42A5F5",
              data: [40, 20, 12, 39, 10, 40],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
        },
      };
    },
  });
  </script>
  
  <style>
  /* Adicione estilos específicos, se necessário */
  </style>
  