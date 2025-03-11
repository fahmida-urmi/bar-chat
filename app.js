 // Data for the bar chart
 const data = [
    { label: 'January', value: 40, color: '#f87171' },
    { label: 'February', value: 55, color: '#60a5fa' },
    { label: 'March', value: 75, color: '#34d399' },
    { label: 'April', value: 50, color: '#fbbf24' },
    { label: 'May', value: 90, color: '#a78bfa' }
  ];

  // Get canvas context
  const canvas = document.getElementById('barChart');
  const ctx = canvas.getContext('2d');

  // Chart dimensions and padding
  const chartWidth = canvas.width;
  const chartHeight = canvas.height;
  const padding = 40;

  // Calculate the maximum value from the data for scaling
  const maxValue = Math.max(...data.map(item => item.value));

  // Calculate bar dimensions (20px gap between bars)
  const gap = 20;
  const barWidth = (chartWidth - padding * 2 - gap * (data.length - 1)) / data.length;

  // Draw each bar and labels
  data.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * (chartHeight - padding * 2);
    const x = padding + index * (barWidth + gap);
    const y = chartHeight - padding - barHeight;

    // Draw bar rectangle
    ctx.fillStyle = item.color;
    ctx.fillRect(x, y, barWidth, barHeight);

    // Draw the value on top of the bar
    ctx.fillStyle = '#333';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.value, x + barWidth / 2, y - 5);

    // Draw the label below the bar
    ctx.fillText(item.label, x + barWidth / 2, chartHeight - padding + 15);
  });

  // Create a legend for the chart
  const legendContainer = document.getElementById('legend');
  data.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = 'flex items-center mt-2';
    legendItem.innerHTML = `
      <div class="w-4 h-4 mr-2" style="background-color: ${item.color};"></div>
      <span class="text-gray-700 text-sm">${item.label}</span>
    `;
    legendContainer.appendChild(legendItem);
  });