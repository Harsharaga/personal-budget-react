import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import * as d3 from 'd3'; 
import './HomePage.scss'; 
import budgetData from './budget.json'; 

function HomePage() {
  const chartRef = useRef(null); 

  useEffect(() => {
    initializeChart(budgetData.myBudget);

    return () => {
      
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  
  const initializeChart = (data) => {
    const labels = data.map(item => item.title);   
    const values = data.map(item => item.budget);  

    const ctx = document.getElementById('myChart').getContext('2d');

    
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    
    chartRef.current = new Chart(ctx, {
      type: 'pie', 
      data: {
        labels: labels, 
        datasets: [{
          label: 'Budget',
          data: values,  
          backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#FFFF00',
            '#00FF00',
            '#00FFFF'
        ],
          borderColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#FFFF00',
            '#00FF00',
            '#00FFFF'
        ],
          borderWidth: 1
        }]
      },
      
    });
  };

  
  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </article>

        <article>
          <h1>Alerts</h1>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </article>

        <article>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they tend to live happier lives... since they spend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </article>

        <article>
          <h1>Free</h1>
          <p>
            This app is free!!! And you are the only one holding your data!
          </p>
        </article>

        <article>
          <h1>Chart</h1>
          <p>
            <canvas id="myChart" width="400" height="400"></canvas>
            <div id="d3-chart"></div> {/* For D3.js visualization */}
          </p>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
