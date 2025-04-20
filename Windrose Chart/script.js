const studentData = [
    { no: 1, nim: '2101020014', cpmk12: 100, cpmk31: 90, cpmk71: 100, cpmk72: 100, total: 99.1 },
    { no: 2, nim: '2101020024', cpmk12: 100, cpmk31: 20, cpmk71: 70, cpmk72: 70, total: 68.2 },
    { no: 3, nim: '2101020048', cpmk12: 100, cpmk31: 90, cpmk71: 100, cpmk72: 100, total: 99.1 },
    { no: 4, nim: '2101020058', cpmk12: 100, cpmk31: 90, cpmk71: 100, cpmk72: 100, total: 99.1 },
    { no: 5, nim: '2101020074', cpmk12: 90, cpmk31: 60, cpmk71: 70, cpmk72: 70, total: 70.9 },
    { no: 6, nim: '2101020092', cpmk12: 100, cpmk31: 20, cpmk71: 70, cpmk72: 70, total: 68.2 },
    { no: 7, nim: '2101020103', cpmk12: 0, cpmk31: 0, cpmk71: 0, cpmk72: 0, total: 0 },
    { no: 8, nim: '2101020104', cpmk12: 90, cpmk31: 60, cpmk71: 70, cpmk72: 70, total: 70.9 },
    { no: 9, nim: '2101020117', cpmk12: 90, cpmk31: 60, cpmk71: 70, cpmk72: 70, total: 70.9 },
    { no: 10, nim: '2201020001', cpmk12: 100, cpmk31: 60, cpmk71: 60, cpmk72: 60, total: 63.6 },
    { no: 11, nim: '2201020002', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 12, nim: '2201020010', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 13, nim: '2201020014', cpmk12: 100, cpmk31: 60, cpmk71: 60, cpmk72: 60, total: 63.6 },
    { no: 14, nim: '2201020015', cpmk12: 100, cpmk31: 60, cpmk71: 60, cpmk72: 60, total: 63.6 },
    { no: 15, nim: '2201020018', cpmk12: 100, cpmk31: 70, cpmk71: 100, cpmk72: 100, total: 97.3 },
    { no: 16, nim: '2201020019', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 17, nim: '2201020022', cpmk12: 90, cpmk31: 20, cpmk71: 50, cpmk72: 50, total: 50.9 },
    { no: 18, nim: '2201020026', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 19, nim: '2201020032', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 20, nim: '2201020039', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 21, nim: '2201020041', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 22, nim: '2201020047', cpmk12: 100, cpmk31: 75, cpmk71: 50, cpmk72: 50, total: 56.8 },
    { no: 23, nim: '2201020048', cpmk12: 100, cpmk31: 70, cpmk71: 100, cpmk72: 100, total: 97.3 },
    { no: 24, nim: '2201020057', cpmk12: 100, cpmk31: 75, cpmk71: 50, cpmk72: 50, total: 56.8 },
    { no: 25, nim: '2201020063', cpmk12: 100, cpmk31: 76, cpmk71: 100, cpmk72: 100, total: 97.8 },
    { no: 26, nim: '2201020065', cpmk12: 100, cpmk31: 75, cpmk71: 85, cpmk72: 85, total: 85.5 },
    { no: 27, nim: '2201020066', cpmk12: 100, cpmk31: 60, cpmk71: 50, cpmk72: 50, total: 55.5 },
    { no: 28, nim: '2201020067', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 29, nim: '2201020070', cpmk12: 100, cpmk31: 75, cpmk71: 100, cpmk72: 100, total: 97.7 },
    { no: 30, nim: '2201020074', cpmk12: 100, cpmk31: 60, cpmk71: 50, cpmk72: 50, total: 55.5 },
    { no: 31, nim: '2201020075', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 32, nim: '2201020083', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 33, nim: '2201020086', cpmk12: 0, cpmk31: 0, cpmk71: 0, cpmk72: 0, total: 0 },
    { no: 34, nim: '2201020090', cpmk12: 100, cpmk31: 75, cpmk71: 100, cpmk72: 100, total: 97.7 },
    { no: 35, nim: '2201020091', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 36, nim: '2201020092', cpmk12: 100, cpmk31: 60, cpmk71: 50, cpmk72: 50, total: 55.5 },
    { no: 37, nim: '2201020093', cpmk12: 100, cpmk31: 75, cpmk71: 85, cpmk72: 85, total: 85.5 },
    { no: 38, nim: '2201020094', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 39, nim: '2201020095', cpmk12: 100, cpmk31: 75, cpmk71: 85, cpmk72: 85, total: 85.5 },
    { no: 40, nim: '2201020098', cpmk12: 100, cpmk31: 75, cpmk71: 50, cpmk72: 50, total: 56.8 },
    { no: 41, nim: '2201020099', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 42, nim: '2201020100', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 43, nim: '2201020103', cpmk12: 100, cpmk31: 70, cpmk71: 100, cpmk72: 100, total: 97.3 },
    { no: 44, nim: '2201020104', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 45, nim: '2201020105', cpmk12: 100, cpmk31: 70, cpmk71: 50, cpmk72: 50, total: 56.4 },
    { no: 46, nim: '2201020106', cpmk12: 90, cpmk31: 50, cpmk71: 40, cpmk72: 40, total: 45.5 },
    { no: 47, nim: '2201020109', cpmk12: 100, cpmk31: 80, cpmk71: 70, cpmk72: 70, total: 73.6 },
    { no: 48, nim: '2201020112', cpmk12: 90, cpmk31: 50, cpmk71: 40, cpmk72: 40, total: 45.5 },
    { no: 49, nim: '2201020116', cpmk12: 90, cpmk31: 50, cpmk71: 40, cpmk72: 40, total: 45.5 },
    { no: 50, nim: '2201020117', cpmk12: 100, cpmk31: 70, cpmk71: 50, cpmk72: 50, total: 56.4 },
    { no: 51, nim: '2201020118', cpmk12: 100, cpmk31: 80, cpmk71: 90, cpmk72: 90, total: 90 },
    { no: 52, nim: '2201020122', cpmk12: 100, cpmk31: 70, cpmk71: 50, cpmk72: 50, total: 56.4 },
    { no: 53, nim: '2201020123', cpmk12: 90, cpmk31: 20, cpmk71: 50, cpmk72: 50, total: 50.9 }
];

// Color scheme
const colors = {
    cpmk12: '#FF6384',
    cpmk31: '#36A2EB',
    cpmk71: '#FFCE56',
    cpmk72: '#4BC0C0',
    total: '#9966FF',
};

// Initialize UI when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = document.getElementById('studentSelect');
    const showBtn = document.getElementById('showBtn');
    const showAllBtn = document.getElementById('showAllBtn');
    const studentInfo = document.getElementById('studentInfo');
    const infoContent = document.getElementById('infoContent');
    const tableBody = document.querySelector('#dataTable tbody');
    const windroseChart = document.getElementById('windroseChart');
    const chartTitle = document.getElementById('chartTitle');
    const chartLegend = document.getElementById('chartLegend');

    // Initialize dropdown and table
    initDropdown();
    initTable();
    initLegend();
    
    // Set up event listeners
    showBtn.addEventListener('click', showSelectedStudent);
    showAllBtn.addEventListener('click', showAllStudents);

    // Draw initial chart
    drawWindroseChart(studentData.slice(0, 3));
});

function getTextColorForTotal(total) {
    return total >= 70 ? '#2c3e50' : '#d63031';
}

// Initialization functions
function initDropdown() {
    const studentSelect = document.getElementById('studentSelect');
    
    studentData.forEach(student => {
        const option = document.createElement('option');
        option.value = student.nim;
        
        const colorBox = document.createElement('span');
        colorBox.style.display = 'inline-block';
        colorBox.style.width = '12px';
        colorBox.style.height = '12px';
        colorBox.style.borderRadius = '50%';
        colorBox.style.backgroundColor = (student.total);
        colorBox.style.marginRight = '8px';
        colorBox.style.verticalAlign = 'middle';
        
        option.appendChild(colorBox);
        option.appendChild(document.createTextNode(`${student.nim} - Total: ${student.total.toFixed(1)}`));
        studentSelect.appendChild(option);
    });
}

function initTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    
    studentData.forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.no}</td>
            <td><strong>${student.nim}</strong></td>
            <td style="font-weight:bold;">${student.cpmk12}</td>
            <td style="font-weight:bold;">${student.cpmk31}</td>
            <td style="font-weight:bold;">${student.cpmk71}</td>
            <td style="font-weight:bold;">${student.cpmk72}</td>
            <td style="font-weight:bold; color:${getTextColorForTotal(student.total)};">
                ${student.total.toFixed(1)}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function initLegend() {
    const chartLegend = document.getElementById('chartLegend');
    const legendItems = [
        { color: colors.cpmk12, label: 'CPMK12 (Nilai 1)' },
        { color: colors.cpmk31, label: 'CPMK31 (Nilai 2)' },
        { color: colors.cpmk71, label: 'CPMK71 (Nilai 3)' },
        { color: colors.cpmk72, label: 'CPMK72 (Nilai 4)' },
        { color: colors.total, label: 'TOTAL NILAI TBP' }
    ];

    legendItems.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'legend-color';
        colorBox.style.backgroundColor = item.color;
        colorBox.style.boxShadow = `0 0 0 2px ${item.color}40`;
        
        const label = document.createElement('span');
        label.textContent = item.label;
        label.style.fontWeight = '500';
        
        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        chartLegend.appendChild(legendItem);
    });
}

// Event handlers
function showSelectedStudent() {
    const selectedNim = document.getElementById('studentSelect').value;
    if (!selectedNim) {
        alert('Silakan pilih mahasiswa terlebih dahulu');
        return;
    }
    
    const student = studentData.find(s => s.nim === selectedNim);
    if (student) {
        showStudentData(student);
        drawWindroseChart([student]);
        document.getElementById('studentInfo').style.display = 'block';
    }
}

function showAllStudents() {
    drawWindroseChart(studentData);
    document.getElementById('studentInfo').style.display = 'none';
    document.getElementById('chartTitle').textContent = 'Distribusi Nilai TBP Mahasiswa';
}

function showStudentData(student) {
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = `
        <div class="info-row">
            <span class="info-label">NIM</span>
            <span class="info-value" style="background-color:#e9f7fe">${student.nim}</span>
        </div>
        <div class="info-row">
            <span class="info-label">CPMK12</span>
            <span class="info-value" style="background-color:${colors.cpmk12}30">${student.cpmk12}</span>
        </div>
        <div class="info-row">
            <span class="info-label">CPMK31</span>
            <span class="info-value" style="background-color:${colors.cpmk31}30">${student.cpmk31}</span>
        </div>
        <div class="info-row">
            <span class="info-label">CPMK71</span>
            <span class="info-value" style="background-color:${colors.cpmk71}30">${student.cpmk71}</span>
        </div>
        <div class="info-row">
            <span class="info-label">CPMK72</span>
            <span class="info-value" style="background-color:${colors.cpmk72}30">${student.cpmk72}</span>
        </div>
        <div class="info-row">
            <span class="info-label">TOTAL</span>
            <span class="info-value" style="background-color:${colors.total}40; font-weight:bold; font-size:1.1em;">
                ${student.total.toFixed(1)}
            </span>
        </div>
    `;
    document.getElementById('chartTitle').textContent = `Nilai TBP Mahasiswa ${student.nim}`;
}

// Chart drawing function
function drawWindroseChart(data) {
    windroseChart.innerHTML = '';
    let svgHTML = `<svg width="95%" height="75%" viewBox="40 -40 950 900">`;
    
    const centerX = 650;
    const centerY = 325;
    const radius = 250;
    const numCategories = 5;
    const angleStep = (2 * Math.PI) / numCategories;
    
    // Draw polar grid with adjusted dash pattern
    for (let i = 0; i <= 100; i += 20) {
        svgHTML += `
            <circle cx="${centerX}" cy="${centerY}" r="${(radius * i) / 100}" 
                fill="none" stroke="${i % 40 === 0 ? '#b0b0b0' : '#a0a0a0'}" 
                stroke-width="${i % 40 === 0 ? '2.5' : '2.5'}" 
                stroke-dasharray="${i % 20 === 0 ? 'none' : 'none'}" />
        `;
        
        if (i > 0) {
            svgHTML += `
                <text x="${centerX + (radius * i) / 100 + 15}" y="${centerY + 5}" 
                    font-size="13" fill="#555" font-weight="bold">
                    ${i}%
                </text>
            `;
        }
    }
    

    
    // Draw radial lines
    for (let i = 0; i < numCategories; i++) {
        const angle = i * angleStep - Math.PI / 2;
        svgHTML += `
            <line x1="${centerX}" y1="${centerY}" 
                x2="${centerX + radius * Math.cos(angle)}" 
                y2="${centerY + radius * Math.sin(angle)}" 
                stroke="#a0a0a0" stroke-width="1.5" stroke-dasharray="none" />
        `;
    }
    
    // Draw category labels
    const categories = [
        { name: 'CPMK12', color: colors.cpmk12 },
        { name: 'CPMK31', color: colors.cpmk31 },
        { name: 'CPMK71', color: colors.cpmk71 },
        { name: 'CPMK72', color: colors.cpmk72 },
        { name: 'TOTAL', color: colors.total }
    ];
    
    for (let i = 0; i < categories.length; i++) {
        const angle = i * angleStep - Math.PI / 3;
        svgHTML += `
            <text 
                x="${centerX + (radius + 50) * Math.cos(angle)}" 
                y="${centerY + (radius + 50) * Math.sin(angle)}" 
                text-anchor="middle" 
                font-size="15" 
                font-weight="bold" 
                fill="${categories[i].color}"  // Warna diambil dari skema colors
            >
                ${categories[i].name}
            </text>
        `;
    }
    
    // Draw data wedges
    data.forEach(student => {
        const values = [
            student.cpmk12, 
            student.cpmk31, 
            student.cpmk71, 
            student.cpmk72, 
            student.total
        ];
        
        const colorKeys = ['cpmk12', 'cpmk31', 'cpmk71', 'cpmk72', 'total'];
        
        for (let i = 0; i < numCategories; i++) {
            const angle1 = i * angleStep - Math.PI / 3 - angleStep / 3;
            const angle2 = i * angleStep - Math.PI / 3 + angleStep / 3;
            const value = values[i];
            const radiusValue = (radius * value) / 100;
            
            if (value <= 0) continue;
            
            const x1 = centerX + radiusValue * Math.cos(angle1);
            const y1 = centerY + radiusValue * Math.sin(angle1);
            const x2 = centerX + radiusValue * Math.cos(angle2);
            const y2 = centerY + radiusValue * Math.sin(angle2);
            
            svgHTML += `
                <path d="M ${centerX} ${centerY} L ${x1} ${y1} A ${radiusValue} ${radiusValue} 0 0 1 ${x2} ${y2} Z"
                    fill="${colors[colorKeys[i]]}" 
                    opacity="${i === 4 ? '0.8' : '0.7'}" 
                    stroke="#333" 
                    stroke-width="${i % 40 === 0 ? '2.5' : '1.5'}" 
                    stroke-dasharray="${i === 4 ? 'none' : 'none'}" />
            `;
            
            const midAngle = (angle1 + angle2) / 2;
            const labelRadius = radiusValue * 0.6;
            const labelX = centerX + labelRadius * Math.cos(midAngle);
            const labelY = centerY + labelRadius * Math.sin(midAngle);
            
            svgHTML += `
                <text x="${labelX}" y="${labelY}" text-anchor="middle" 
                    font-size="${i === 4 ? '14' : '12'}" 
                    fill="${i === 4 ? 'Black' : '#000'}" 
                    font-weight="bold" 
                    stroke="${i === 4 ? '#333' : 'none'}" 
                    stroke-width="0.5">
                    ${value.toFixed(1)}
                </text>
            `;
        }
    });
    
    svgHTML += `</svg>`;
    windroseChart.innerHTML = svgHTML;
}