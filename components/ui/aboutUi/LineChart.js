'use client'
import React, { useEffect } from "react";
import { Chart } from "chart.js";

export default function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
          data: [11, 29, 30, 22, 22, 30, 25, 30],
          borderColor: "#FBA330",
          backgroundColor: "#FBA330",
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              color: 'white', // Set the text color of the x-axis labels
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              callback: function (value) {
                return value;
              },
              color: 'white', // Set the text color of the y-axis labels
              max: 30, // Set the maximum value of the y-axis
              min: 10, // Set the minimum value of the y-axis
            },
          },
        },
      },
    });

  }, [])

  return (
    <>
      <div className="mt-10 text-white lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
        <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold">Neighbourhood & Surroundings</h1>
        <canvas id='myChart' className="text-white"></canvas>
      </div>
    </>
  )
}
