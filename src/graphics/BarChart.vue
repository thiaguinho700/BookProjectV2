<template>
  <div>
    <BarChart
      v-if="chartData && chartOptions"
      :chart-data="chartData"
      :chart-options="chartOptions"
      style="width: 800px; height: 500px"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  registerables 
} from "chart.js";

// Registrar os componentes do Chart.js
ChartJS.register(
  ...registerables 
);

export default defineComponent({
  name: "BarChartComponent", // Nome atualizado
  components: {
    BarChart: Bar, // Certifique-se de usar o componente correto
  },
  setup() {
    
      const testeData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            labels: "Data 1",
            backgroundColor: "#42A5F5",
            data: [40, 20, 12, 39, 10, 40],
          },
        ],
      }      
    return {testeData}
  },
});
</script>

<style>
/* Adicione estilos específicos, se necessário */
</style>
