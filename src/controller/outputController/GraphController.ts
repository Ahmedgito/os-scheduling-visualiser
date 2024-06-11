import ApexCharts from "apexcharts";

export class GraphController {
  private options: any;
  private chart: any;
  constructor() {
    this.options = {
      series: [
        // George Washington
        {
          name: "George Washington",
          data: [
            {
              x: "Processes",
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime(),
              ],
            },
            {
              x: "Processes",
              y: [
                new Date(1809, 2, 4).getTime(),
                new Date(1820, 2, 4).getTime(),
              ],
            },
          ],
        },
        // John Adams
        {
          name: "John Adams",
          data: [
            {
              x: "Processes",
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime(),
              ],
            },
          ],
        },
        // Thomas Jefferson
        {
          name: "Thomas Jefferson",
          data: [
            {
              x: "Processes",
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1809, 2, 4).getTime(),
              ],
            },
          ],
        },
      ],
      chart: {
        height: 150,
        width: 800,
        type: "rangeBar",
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: [],
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
          rangeBarGroupRows: true,
        },
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#3F51B5",
        "#546E7A",
        "#D4526E",
        "#8D5B4C",
        "#F86624",
        "#D7263D",
        "#1B998B",
        "#2E294E",
        "#F46036",
        "#E2C044",
      ],
      fill: {
        type: "solid",
      },
      xaxis: {
        type: "datetime",
      },
      legend: {
        position: "right",
      },
      yaxis: {
        labels: {
          show: false,
        },
      },

      tooltip: {
        custom: function (opts: any) {
          const fromYear = new Date(opts.y1).getFullYear();
          const toYear = new Date(opts.y2).getFullYear();

          const w = opts.ctx.w;
          let ylabel = w.globals.labels[opts.dataPointIndex];
          let seriesName = w.config.series[opts.seriesIndex].name
            ? w.config.series[opts.seriesIndex].name
            : "";
          const color = w.globals.colors[opts.seriesIndex];

          return (
            '<div class="apexcharts-tooltip-rangebar">' +
            '<div> <span class="series-name" style="color: ' +
            color +
            '">' +
            (seriesName ? seriesName : "") +
            "</span></div>" +
            '<div> <span class="category">' +
            ylabel +
            ' </span> <span class="value start-value">' +
            fromYear +
            '</span> <span class="separator">-</span> <span class="value end-value">' +
            toYear +
            "</span></div>" +
            "</div>"
          );
        },
      },
    };
  }

  public renderChart(): void {
    this.chart = new ApexCharts(document.querySelector("#chart"), this.options);
    this.chart.render();
  }

  public updateChart(): void {
    this.chart.updateOptions(this.options);
  }
}
