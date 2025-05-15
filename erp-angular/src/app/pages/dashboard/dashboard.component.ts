import { Component, type OnInit } from "@angular/core"
import { Chart, registerables } from "chart.js"
import { faChartBar, faChartLine, faMoneyBillWave, faDollarSign, faCalendarDays, faCalendar, faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa módulo FA
import { CommonModule } from '@angular/common';  // IMPORTANTE

// Register Chart.js components
Chart.register(...registerables)

interface MesData {
  mes: string
  valor: number
}

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    // Remove this line if you want to use NgModule approach
    standalone: true,
    imports: [
      CommonModule,
      FontAwesomeModule
    ],
  })

export class DashboardComponent implements OnInit {

  faChartBar = faChartBar;
  faChartLine = faChartLine;
  faMoneyBillWave = faMoneyBillWave;
  faDollarSign = faDollarSign;
  faCalendarDays = faCalendarDays;
  faCalendar = faCalendar;
  faArrowTrendUp = faArrowTrendUp;
  faArrowTrendDown = faArrowTrendDown;
  // Chart configuration
  chartType: "barra" | "linha" = "barra"

  // Financial data
  totalLucro = 125000
  mediaLucro = 10416.67
  melhorMes: MesData = { mes: "Novembro", valor: 18500 }
  piorMes: MesData = { mes: "Fevereiro", valor: 7500 }

  // Chart data
  chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Lucro",
        data: [4000, 9000, 6000, 7000, 6500, 7000, 7000, 8000, 9000, 9000, 13000, 13000],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Despesas",
        data: [8000, 10000, 9000, 11000, 9500, 12000, 10000, 13000, 11000, 14000, 12000, 15000],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Receitas",
        data: [12000, 19000, 15000, 18000, 16000, 19000, 17000, 21000, 20000, 23000, 25000, 28000],
        backgroundColor: "rgba(100, 210, 180, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  }

  // Chart options
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(30, 30, 30, 0.9)",
        titleFont: {
          size: 16,
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
        padding: 12,
        cornerRadius: 12,
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.raw.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
          callback: (value: any) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: "white",
        borderWidth: 2,
      },
    },
  }

  barChart: any
  lineChart: any

  constructor() {}

  ngOnInit(): void {
    this.initCharts()
  }

  ngAfterViewInit(): void {
    // Initialize charts after view is initialized
    setTimeout(() => {
      this.initCharts()
    }, 100)
  }

  initCharts(): void {
    this.createBarChart()
    this.createLineChart()

    // Show the default chart type
    this.toggleChartType(this.chartType)
  }

  createBarChart(): void {
    const barCtx = document.getElementById("barChart") as HTMLCanvasElement
    if (barCtx) {
      if (this.barChart) {
        this.barChart.destroy()
      }

      this.barChart = new Chart(barCtx, {
        type: "bar",
        data: this.chartData,
        options: this.chartOptions,
      })
    }
  }

  createLineChart(): void {
    const lineCtx = document.getElementById("lineChart") as HTMLCanvasElement
    if (lineCtx) {
      if (this.lineChart) {
        this.lineChart.destroy()
      }

      this.lineChart = new Chart(lineCtx, {
        type: "line",
        data: this.chartData,
        options: this.chartOptions,
      })
    }
  }

  toggleChartType(type: "barra" | "linha"): void {
    this.chartType = type

    // Hide all charts
    const barChartElement = document.getElementById("barChart")
    const lineChartElement = document.getElementById("lineChart")

    if (barChartElement) {
      barChartElement.style.display = "none"
    }

    if (lineChartElement) {
      lineChartElement.style.display = "none"
    }

    // Show selected chart
    if (type === "barra" && barChartElement) {
      barChartElement.style.display = "block"
    } else if (type === "linha" && lineChartElement) {
      lineChartElement.style.display = "block"
    }
  }

  formatCurrency(value: number): string {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }
}
