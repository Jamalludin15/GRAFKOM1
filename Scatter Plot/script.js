//Data mahasiswa dari Excel
const studentData = [
            { ID: "2101020014", TBP: 99.1, TUGAS: 56, UTS: 50, UAS: 70, NilaiAkhir: 82.3, CPMK012: 100, CPMK031: 90, CPMK071: 82, CPMK072: 80 },
            { ID: "2101020024", TBP: 68.2, TUGAS: 39, UTS: 50, UAS: 85, NilaiAkhir: 68.2, CPMK012: 100, CPMK031: 20, CPMK071: 66, CPMK072: 71 },
            { ID: "2101020048", TBP: 99.1, TUGAS: 66, UTS: 70, UAS: 49, NilaiAkhir: 80.6, CPMK012: 100, CPMK031: 90, CPMK071: 89, CPMK072: 73 },
            { ID: "2101020058", TBP: 99.1, TUGAS: 89, UTS: 40, UAS: 70, NilaiAkhir: 82.5, CPMK012: 100, CPMK031: 90, CPMK071: 83, CPMK072: 80 },
            { ID: "2101020074", TBP: 70.9, TUGAS: 59, UTS: 60, UAS: 69, NilaiAkhir: 68.2, CPMK012: 90, CPMK031: 60, CPMK071: 73, CPMK072: 64 },
            { ID: "2101020092", TBP: 68.2, TUGAS: 59, UTS: 60, UAS: 49, NilaiAkhir: 61.7, CPMK012: 100, CPMK031: 20, CPMK071: 71, CPMK072: 56 },
            { ID: "2101020103", TBP: 0, TUGAS: 40, UTS: 0, UAS: 34, NilaiAkhir: 10.5, CPMK012: 0, CPMK031: 0, CPMK071: 7.1, CPMK072: 15 },
            { ID: "2101020104", TBP: 70.9, TUGAS: 40, UTS: 50, UAS: 65, NilaiAkhir: 64.8, CPMK012: 90, CPMK031: 60, CPMK071: 64, CPMK072: 64 },
            { ID: "2101020117", TBP: 70.9, TUGAS: 60, UTS: 60, UAS: 65, NilaiAkhir: 67.3, CPMK012: 90, CPMK031: 60, CPMK071: 71, CPMK072: 64 },
            { ID: "2201020001", TBP: 63.6, TUGAS: 50, UTS: 80, UAS: 69, NilaiAkhir: 66.8, CPMK012: 100, CPMK031: 60, CPMK071: 76, CPMK072: 58 },
            { ID: "2201020002", TBP: 73.6, TUGAS: 70, UTS: 80, UAS: 85, NilaiAkhir: 77.3, CPMK012: 100, CPMK031: 80, CPMK071: 84, CPMK072: 71 },
            { ID: "2201020010", TBP: 90, TUGAS: 80, UTS: 80, UAS: 85, NilaiAkhir: 86.8, CPMK012: 100, CPMK031: 80, CPMK071: 94, CPMK072: 82 },
            { ID: "2201020014", TBP: 63.6, TUGAS: 97.5, UTS: 80, UAS: 85, NilaiAkhir: 73.1, CPMK012: 100, CPMK031: 60, CPMK071: 83, CPMK072: 65 },
            { ID: "2201020015", TBP: 63.6, TUGAS: 70, UTS: 80, UAS: 70, NilaiAkhir: 68, CPMK012: 100, CPMK031: 60, CPMK071: 80, CPMK072: 58 },
            { ID: "2201020018", TBP: 97.3, TUGAS: 30, UTS: 70, UAS: 69, NilaiAkhir: 82.8, CPMK012: 100, CPMK031: 70, CPMK071: 86, CPMK072: 80 },
            { ID: "2201020019", TBP: 90, TUGAS: 100, UTS: 70, UAS: 70, NilaiAkhir: 82.5, CPMK012: 100, CPMK031: 80, CPMK071: 93, CPMK072: 75 },
            { ID: "2201020022", TBP: 50.9, TUGAS: 70, UTS: 80, UAS: 53, NilaiAkhir: 56.8, CPMK012: 90, CPMK031: 20, CPMK071: 75, CPMK072: 45 },
            { ID: "2201020026", TBP: 73.6, TUGAS: 70, UTS: 80, UAS: 85, NilaiAkhir: 77.3, CPMK012: 100, CPMK031: 80, CPMK071: 84, CPMK072: 71 },
            { ID: "2201020032", TBP: 90, TUGAS: 79.5, UTS: 60, UAS: 53, NilaiAkhir: 75.7, CPMK012: 100, CPMK031: 80, CPMK071: 85, CPMK072: 67 },
            { ID: "2201020039", TBP: 73.6, TUGAS: 60, UTS: 80, UAS: 53, NilaiAkhir: 68.8, CPMK012: 100, CPMK031: 80, CPMK071: 82, CPMK072: 56 },
            { ID: "2201020041", TBP: 90, TUGAS: 100, UTS: 70, UAS: 70, NilaiAkhir: 82.5, CPMK012: 100, CPMK031: 80, CPMK071: 93, CPMK072: 75 },
            { ID: "2201020047", TBP: 56.8, TUGAS: 70, UTS: 60, UAS: 49, NilaiAkhir: 56, CPMK012: 100, CPMK031: 75, CPMK071: 64, CPMK072: 45 },
            { ID: "2201020048", TBP: 97.3, TUGAS: 80, UTS: 80, UAS: 70, NilaiAkhir: 87, CPMK012: 100, CPMK031: 70, CPMK071: 99, CPMK072: 80 },
            { ID: "2201020057", TBP: 56.8, TUGAS: 79, UTS: 70, UAS: 53, NilaiAkhir: 59, CPMK012: 100, CPMK031: 75, CPMK071: 72, CPMK072: 45 },
            { ID: "2201020063", TBP: 97.8, TUGAS: 86, UTS: 70, UAS: 69, NilaiAkhir: 85.9, CPMK012: 100, CPMK031: 76, CPMK071: 94, CPMK072: 80 },
            { ID: "2201020065", TBP: 85.5, TUGAS: 80, UTS: 70, UAS: 79, NilaiAkhir: 81.3, CPMK012: 100, CPMK031: 75, CPMK071: 89, CPMK072: 75 },
            { ID: "2201020066", TBP: 55.5, TUGAS: 80, UTS: 70, UAS: 69, NilaiAkhir: 62.3, CPMK012: 100, CPMK031: 60, CPMK071: 72, CPMK072: 53 },
            { ID: "2201020067", TBP: 90, TUGAS: 99.5, UTS: 70, UAS: 53, NilaiAkhir: 78.2, CPMK012: 100, CPMK031: 80, CPMK071: 92, CPMK072: 67 },
            { ID: "2201020070", TBP: 97.7, TUGAS: 70, UTS: 70, UAS: 79, NilaiAkhir: 87.5, CPMK012: 100, CPMK031: 75, CPMK071: 94, CPMK072: 84 },
            { ID: "2201020074", TBP: 55.5, TUGAS: 70, UTS: 50, UAS: 69, NilaiAkhir: 58.8, CPMK012: 100, CPMK031: 60, CPMK071: 62, CPMK072: 53 },
            { ID: "2201020075", TBP: 90, TUGAS: 100, UTS: 70, UAS: 69, NilaiAkhir: 82.3, CPMK012: 100, CPMK031: 80, CPMK071: 92, CPMK072: 75 },
            { ID: "2201020083", TBP: 90, TUGAS: 68, UTS: 70, UAS: 69, NilaiAkhir: 80.7, CPMK012: 100, CPMK031: 80, CPMK071: 88, CPMK072: 75 },
            { ID: "2201020086", TBP: 0, TUGAS: 50, UTS: 0, UAS: 0, NilaiAkhir: 2.5, CPMK012: 0, CPMK031: 0, CPMK071: 7.1, CPMK072: 0 },
            { ID: "2201020090", TBP: 97.7, TUGAS: 99.5, UTS: 70, UAS: 70, NilaiAkhir: 86.7, CPMK012: 100, CPMK031: 75, CPMK071: 97, CPMK072: 80 },
            { ID: "2201020091", TBP: 90, TUGAS: 100, UTS: 60, UAS: 68, NilaiAkhir: 80.5, CPMK012: 100, CPMK031: 80, CPMK071: 87, CPMK072: 75 },
            { ID: "2201020092", TBP: 55.5, TUGAS: 79.5, UTS: 80, UAS: 69, NilaiAkhir: 63.7, CPMK012: 100, CPMK031: 60, CPMK071: 76, CPMK072: 53 },
            { ID: "2201020093", TBP: 85.5, TUGAS: 70, UTS: 70, UAS: 69, NilaiAkhir: 78.3, CPMK012: 100, CPMK031: 75, CPMK071: 86, CPMK072: 72 },
            { ID: "2201020094", TBP: 90, TUGAS: 100, UTS: 70, UAS: 53, NilaiAkhir: 78.3, CPMK012: 100, CPMK031: 80, CPMK071: 92, CPMK072: 67 },
            { ID: "2201020095", TBP: 85.5, TUGAS: 79.5, UTS: 70, UAS: 69, NilaiAkhir: 78.7, CPMK012: 100, CPMK031: 75, CPMK071: 87, CPMK072: 72 },
            { ID: "2201020098", TBP: 56.8, TUGAS: 30, UTS: 80, UAS: 85, NilaiAkhir: 66, CPMK012: 100, CPMK031: 75, CPMK071: 69, CPMK072: 60 },
            { ID: "2201020099", TBP: 90, TUGAS: 79, UTS: 80, UAS: 85, NilaiAkhir: 86.7, CPMK012: 100, CPMK031: 80, CPMK071: 93, CPMK072: 82 },
            { ID: "2201020100", TBP: 73.6, TUGAS: 79, UTS: 80, UAS: 70, NilaiAkhir: 74, CPMK012: 100, CPMK031: 80, CPMK071: 86, CPMK072: 64 },
            { ID: "2201020103", TBP: 97.3, TUGAS: 96, UTS: 80, UAS: 70, NilaiAkhir: 87.8, CPMK012: 100, CPMK031: 70, CPMK071: 101, CPMK072: 80 },
            { ID: "2201020104", TBP: 73.6, TUGAS: 79, UTS: 80, UAS: 70, NilaiAkhir: 74, CPMK012: 100, CPMK031: 80, CPMK071: 86, CPMK072: 64 },
            { ID: "2201020105", TBP: 56.4, TUGAS: 79.5, UTS: 80, UAS: 85, NilaiAkhir: 68.2, CPMK012: 100, CPMK031: 70, CPMK071: 76, CPMK072: 60 },
            { ID: "2201020106", TBP: 45.5, TUGAS: 70, UTS: 70, UAS: 70, NilaiAkhir: 56.5, CPMK012: 90, CPMK031: 50, CPMK071: 67, CPMK072: 47 },
            { ID: "2201020109", TBP: 73.6, TUGAS: 79.5, UTS: 80, UAS: 70, NilaiAkhir: 74, CPMK012: 100, CPMK031: 80, CPMK071: 86, CPMK072: 64 },
            { ID: "2201020112", TBP: 45.5, TUGAS: 60, UTS: 80, UAS: 68, NilaiAkhir: 57, CPMK012: 90, CPMK031: 50, CPMK071: 69, CPMK072: 47 },
            { ID: "2201020116", TBP: 45.5, TUGAS: 69, UTS: 70, UAS: 53, NilaiAkhir: 52.2, CPMK012: 90, CPMK031: 50, CPMK071: 66, CPMK072: 40 },
            { ID: "2201020117", TBP: 56.4, TUGAS: 57, UTS: 80, UAS: 69, NilaiAkhir: 63.1, CPMK012: 100, CPMK031: 70, CPMK071: 73, CPMK072: 53 },
            { ID: "2201020118", TBP: 90, TUGAS: 69, UTS: 80, UAS: 85, NilaiAkhir: 86.2, CPMK012: 100, CPMK031: 80, CPMK071: 92, CPMK072: 82 },
            { ID: "2201020122", TBP: 56.4, TUGAS: 70, UTS: 70, UAS: 70, NilaiAkhir: 62.5, CPMK012: 100, CPMK031: 70, CPMK071: 71, CPMK072: 53 },
            { ID: "2201020123", TBP: 50.9, TUGAS: 70, UTS: 70, UAS: 68, NilaiAkhir: 59, CPMK012: 90, CPMK031: 20, CPMK071: 70, CPMK072: 53 }
];

// Get DOM elements
const canvas = document.getElementById('scatterplot');
const ctx = canvas.getContext('2d');
const tooltip = document.getElementById('tooltip');
const xAxisSelect = document.getElementById('x-axis');
const yAxisSelect = document.getElementById('y-axis');
const updateButton = document.getElementById('update-chart');
const legendContainer = document.getElementById('legend');
const dataDisplaySelect = document.getElementById('data-display');
const searchNimInput = document.getElementById('search-nim');
const searchButton = document.getElementById('search-button');
const studentList = document.getElementById('student-list');
const notification = document.getElementById('notification');

// Set canvas size
canvas.width = 800;
canvas.height = 500;

// Chart configuration
const margin = { top: 40, right: 40, bottom: 60, left: 60 };
const width = canvas.width - margin.left - margin.right;
const height = canvas.height - margin.top - margin.bottom;

// Color scale for CPMK categories
const colorScale = {
    'CPMK012': '#FF6384',
    'CPMK031': '#36A2EB',
    'CPMK071': '#FFCE56',
    'CPMK072': '#4BC0C0',
    'default': '#9966FF'
};

// Initial chart render
renderChart('TBP', 'NilaiAkhir');

// Event listeners
updateButton.addEventListener('click', () => {
    const xValue = xAxisSelect.value;
    const yValue = yAxisSelect.value;
    renderChart(xValue, yValue);
});

// Event listener for data display selection
dataDisplaySelect.addEventListener('change', (e) => {
    if (e.target.value === 'all') {
        renderStudentList();
    } else {
        // Show sample of 5 random students
        const shuffled = [...studentData].sort(() => 0.5 - Math.random());
        renderStudentList(shuffled.slice(0, 5));
    }
});

// Event listener for search button
searchButton.addEventListener('click', () => {
    const nim = searchNimInput.value.trim();
    if (nim) {
        highlightStudent(nim);
    }
});

// Also search when Enter is pressed in search input
searchNimInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const nim = searchNimInput.value.trim();
        if (nim) {
            highlightStudent(nim);
        }
    }
});

// Function to show notification
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.className = 'notification';
    if (isError) {
        notification.classList.add('error');
    }
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Function to render student list
function renderStudentList(studentsToShow = studentData) {
    studentList.innerHTML = '';
    
    studentsToShow.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.textContent = `${student.ID} - Nilai Akhir: ${student.NilaiAkhir}`;
        studentItem.dataset.nim = student.ID;
        
        studentItem.addEventListener('click', () => {
            highlightStudent(student.ID);
        });
        
        studentList.appendChild(studentItem);
    });
}

// Function to highlight student in scatterplot and list
function highlightStudent(nim) {
    // Remove all highlights first
    document.querySelectorAll('.student-item').forEach(item => {
        item.classList.remove('highlighted');
    });
    
    // Find the student
    const student = studentData.find(s => s.ID === nim);
    
    if (student) {
        // Highlight in list
        const listItem = document.querySelector(`.student-item[data-nim="${nim}"]`);
        if (listItem) {
            listItem.classList.add('highlighted');
            listItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Highlight in scatterplot
        if (student.x && student.y) {
            // Draw a circle around the point
            ctx.beginPath();
            ctx.arc(student.x, student.y, 10, 0, Math.PI * 2);
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Show tooltip
            const xAxis = xAxisSelect.value;
            const yAxis = yAxisSelect.value;
            
            tooltip.style.display = 'block';
            tooltip.style.left = `${student.x + 20}px`;
            tooltip.style.top = `${student.y}px`;
            
            let tooltipContent = `ID: ${student.ID}<br>`;
            tooltipContent += `${getAxisLabel(xAxis)}: ${student[xAxis].toFixed(1)}<br>`;
            tooltipContent += `${getAxisLabel(yAxis)}: ${student[yAxis].toFixed(1)}`;
            
            tooltip.innerHTML = tooltipContent;
            
            showNotification(`Mahasiswa dengan NIM ${nim} ditemukan`);
        }
    } else {
        showNotification(`Mahasiswa dengan NIM ${nim} tidak ditemukan`, true);
    }
}

// Chart rendering function
function renderChart(xAxis, yAxis) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate scales
    const xValues = studentData.map(d => d[xAxis]);
    const yValues = studentData.map(d => d[yAxis]);
    
    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);
    
    // Add some padding to scales
    const xPadding = (xMax - xMin) * 0.1;
    const yPadding = (yMax - yMin) * 0.1;
    
    const xScale = (value) => margin.left + ((value - xMin + xPadding) / (xMax - xMin + 2 * xPadding)) * width;
    const yScale = (value) => canvas.height - margin.bottom - ((value - yMin + yPadding) / (yMax - yMin + 2 * yPadding)) * height;
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(margin.left, canvas.height - margin.bottom);
    ctx.lineTo(margin.left + width, canvas.height - margin.bottom);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(margin.left, canvas.height - margin.bottom);
    ctx.lineTo(margin.left, margin.top);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 0.5;
    
    // X axis grid
    const xTicks = 5;
    for (let i = 0; i <= xTicks; i++) {
        const x = margin.left + (i / xTicks) * width;
        ctx.beginPath();
        ctx.moveTo(x, canvas.height - margin.bottom);
        ctx.lineTo(x, margin.top);
        ctx.stroke();
        
        // X axis labels
        const value = xMin + (i / xTicks) * (xMax - xMin);
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value.toFixed(1), x, canvas.height - margin.bottom + 15);
    }
    
    // Y axis grid
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
        const y = canvas.height - margin.bottom - (i / yTicks) * height;
        ctx.beginPath();
        ctx.moveTo(margin.left, y);
        ctx.lineTo(margin.left + width, y);
        ctx.stroke();
        
        // Y axis labels
        const value = yMin + (i / yTicks) * (yMax - yMin);
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(value.toFixed(1), margin.left - 5, y + 4);
    }
    
    // Draw axis labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(getAxisLabel(xAxis), margin.left + width / 2, canvas.height - margin.bottom + 40);
    
    ctx.save();
    ctx.translate(margin.left - 30, margin.top + height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText(getAxisLabel(yAxis), 0, 0);
    ctx.restore();
    
    // Draw title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${getAxisLabel(yAxis)} vs ${getAxisLabel(xAxis)}`, canvas.width / 2, margin.top - 10);
    
    // Draw data points
    studentData.forEach((student, index) => {
        const x = xScale(student[xAxis]);
        const y = yScale(student[yAxis]);

        // Store positions for highlighting
        student.x = x;
        student.y = y;
        
        // Determine color based on which CPMK is being displayed
        let color = colorScale.default;
        if (xAxis.includes('CPMK') || yAxis.includes('CPMK')) {
            const cpmk = xAxis.includes('CPMK') ? xAxis : yAxis;
            color = colorScale[cpmk] || colorScale.default;
        }
        
        // Draw point
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Store point position for hover detection
        student.x = x;
        student.y = y;
        
        // Add hover event
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Find closest point
            let closestPoint = null;
            let minDistance = Infinity;
            
            studentData.forEach(s => {
                const distance = Math.sqrt(Math.pow(mouseX - s.x, 2) + Math.pow(mouseY - s.y, 2));
                if (distance < minDistance && distance < 15) {
                    minDistance = distance;
                    closestPoint = s;
                }
            });
            
            if (closestPoint) {
                tooltip.style.display = 'block';
                tooltip.style.left = `${e.clientX + 10}px`;
                tooltip.style.top = `${e.clientY + 10}px`;
                
                let tooltipContent = `ID: ${closestPoint.ID}<br>`;
                tooltipContent += `${getAxisLabel(xAxis)}: ${closestPoint[xAxis].toFixed(1)}<br>`;
                tooltipContent += `${getAxisLabel(yAxis)}: ${closestPoint[yAxis].toFixed(1)}`;
                
                tooltip.innerHTML = tooltipContent;
            } else {
                tooltip.style.display = 'none';
            }
        };
        
        canvas.onmouseout = () => {
            tooltip.style.display = 'none';
        };
    });
    
    // Update legend
    updateLegend(xAxis, yAxis);
}

// Helper function to get axis labels
function getAxisLabel(axis) {
    const labels = {
        'TBP': 'TBP Total Score',
        'TUGAS': 'TUGAS (CPMK71) Score',
        'UTS': 'UTS (CPMK71) Score',
        'UAS': 'UAS (CPMK71 & 72) Score',
        'NilaiAkhir': 'Final Score',
        'CPMK012': 'CPMK012 Score',
        'CPMK031': 'CPMK031 Score',
        'CPMK071': 'CPMK071 Score',
        'CPMK072': 'CPMK072 Score'
    };
    return labels[axis] || axis;
}

// Update legend based on current axes
function updateLegend(xAxis, yAxis) {
    legendContainer.innerHTML = '';
    
    // Only show legend if one of the axes is a CPMK
    if (xAxis.includes('CPMK') || yAxis.includes('CPMK')) {
        const cpmk = xAxis.includes('CPMK') ? xAxis : yAxis;
        const color = colorScale[cpmk] || colorScale.default;
        
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        const legendColor = document.createElement('div');
        legendColor.className = 'legend-color';
        legendColor.style.backgroundColor = color;
        
        const legendText = document.createElement('span');
        legendText.textContent = getAxisLabel(cpmk);
        
        legendItem.appendChild(legendColor);
        legendItem.appendChild(legendText);
        legendContainer.appendChild(legendItem);
    }
}
// Initialize student list
renderStudentList();