import React, { useState, useEffect } from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  const [selectedYear, setSelectedYear] = useState(2012);

  useEffect(() => {
    const dataByYear = {
      2012: [65, 78, 66, 44, 56, 67, 75, 80, 90, 95, 65, 80],
      2013: [35, 48, 56, 33, 46, 57, 65, 68, 70, 48, 60, 72],
      2014: [45, 58, 60, 39, 50, 63, 70, 90, 100, 105, 75, 90],
      2015: [55, 68, 70, 48, 60, 72, 80, 90, 100, 105, 75, 90],
      2016: [60, 70, 75, 50, 63, 77, 85, 68, 70, 48, 60, 72],
      2017: [70, 80, 85, 55, 70, 82, 90, 80, 90, 95, 65, 80],
      2018: [75, 85, 90, 60, 75, 87, 95, 90, 100, 105, 75, 90],
      2019: [80, 90, 95, 65, 80, 90, 100, 50, 63, 77, 85, 68],
      2020: [85, 95, 100, 70, 85, 95, 105, 90, 100, 105, 75, 90],
      2021: [90, 100, 105, 75, 90, 100, 110, 50, 63, 77, 85, 68],
      2022: [95, 105, 110, 80, 95, 105, 115, 90, 100, 105, 75, 90],
      2023: [100, 110, 115, 85, 100, 110, 120, 68, 70, 48, 60, 72],
    };

    const years = Array.from({ length: 12 }, (_, index) => 2012 + index);

    const selectedData = dataByYear[selectedYear];

    const config = {
      type: "line",
      data: {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        datasets: [
          {
            label: `Doação x Ajuda - ${selectedYear}`,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: selectedData,
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: `Gráfico Doação x Ajuda - ${selectedYear}`,
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
                autoSkip: true,
                autoSkipPadding: 20, 
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };

    const ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Chuvalerta
              </h6>
              <h2 className="text-white text-xl font-semibold">Gráfico Doação x Ajuda</h2>
              <div className="flex">
                {Array.from({ length: 12 }, (_, index) => 2012 + index).map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`px-4 py-2 mr-2 bg-gray-800 text-white rounded ${
                      selectedYear === year ? 'bg-blue-500' : ''
                    }`}
                  >
                    Ano {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}