document.addEventListener('DOMContentLoaded', function() {
    // Data mahasiswa dengan nilai Total, UTS, dan UAS
    const allStudents = [
        { nim: '2101020014', total: 82.3, uts: 50, uas: 70 },
        { nim: '2101020024', total: 68.2, uts: 50, uas: 85 },
        { nim: '2101020048', total: 80.6, uts: 70, uas: 49 },
        { nim: '2101020058', total: 82.5, uts: 40, uas: 70 },
        { nim: '2101020074', total: 68.2, uts: 60, uas: 69 },
        { nim: '2101020092', total: 61.7, uts: 60, uas: 49 },
        { nim: '2101020103', total: 10.5, uts: 0, uas: 34 },
        { nim: '2101020104', total: 64.8, uts: 50, uas: 65 },
        { nim: '2101020117', total: 67.3, uts: 60, uas: 65 },
        { nim: '2201020001', total: 66.8, uts: 80, uas: 69 },
        { nim: '2201020002', total: 77.3, uts: 80, uas: 85 },
        { nim: '2201020010', total: 86.8, uts: 80, uas: 85 },
        { nim: '2201020014', total: 73.1, uts: 80, uas: 85 },
        { nim: '2201020015', total: 68, uts: 80, uas: 70 },
        { nim: '2201020018', total: 82.8, uts: 70, uas: 69 },
        { nim: '2201020019', total: 82.5, uts: 70, uas: 70 },
        { nim: '2201020022', total: 56.8, uts: 80, uas: 53 },
        { nim: '2201020026', total: 77.3, uts: 80, uas: 85 },
        { nim: '2201020032', total: 75.7, uts: 60, uas: 53 },
        { nim: '2201020039', total: 68.8, uts: 80, uas: 53 },
        { nim: '2201020041', total: 82.5, uts: 70, uas: 70 },
        { nim: '2201020047', total: 56, uts: 60, uas: 49 },
        { nim: '2201020048', total: 87, uts: 80, uas: 70 },
        { nim: '2201020057', total: 59, uts: 70, uas: 53 },
        { nim: '2201020063', total: 85.9, uts: 70, uas: 69 },
        { nim: '2201020065', total: 81.3, uts: 70, uas: 79 },
        { nim: '2201020066', total: 62.3, uts: 70, uas: 69 },
        { nim: '2201020067', total: 78.2, uts: 70, uas: 53 },
        { nim: '2201020070', total: 87.5, uts: 70, uas: 79 },
        { nim: '2201020074', total: 58.8, uts: 50, uas: 69 },
        { nim: '2201020075', total: 82.3, uts: 70, uas: 69 },
        { nim: '2201020083', total: 80.7, uts: 70, uas: 69 },
        { nim: '2201020086', total: 2.5, uts: 0, uas: 0 },
        { nim: '2201020090', total: 86.7, uts: 70, uas: 70 },
        { nim: '2201020091', total: 80.5, uts: 60, uas: 68 },
        { nim: '2201020092', total: 63.7, uts: 80, uas: 69 },
        { nim: '2201020093', total: 78.3, uts: 70, uas: 69 },
        { nim: '2201020094', total: 78.3, uts: 70, uas: 53 },
        { nim: '2201020095', total: 78.7, uts: 70, uas: 69 },
        { nim: '2201020098', total: 66, uts: 80, uas: 85 },
        { nim: '2201020099', total: 86.7, uts: 80, uas: 85 },
        { nim: '2201020100', total: 74, uts: 80, uas: 70 },
        { nim: '2201020103', total: 87.8, uts: 80, uas: 70 },
        { nim: '2201020104', total: 74, uts: 80, uas: 70 },
        { nim: '2201020105', total: 68.2, uts: 80, uas: 85 },
        { nim: '2201020106', total: 56.5, uts: 70, uas: 70 },
        { nim: '2201020109', total: 74, uts: 80, uas: 70 },
        { nim: '2201020112', total: 57, uts: 80, uas: 68 },
        { nim: '2201020116', total: 52.2, uts: 70, uas: 53 },
        { nim: '2201020117', total: 63.1, uts: 80, uas: 69 },
        { nim: '2201020118', total: 86.2, uts: 80, uas: 85 },
        { nim: '2201020122', total: 62.5, uts: 70, uas: 70 },
        { nim: '2201020123', total: 59, uts: 70, uas: 68 }
    ];

    // Warna untuk titik data
    const pointColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
        '#FF9F40', '#C9CBCF', '#5366FF', '#77DD77', '#FF6961',
        '#AEC6CF', '#F49AC2', '#B39EB5', '#DEA5A4', '#CFCFC4',
        '#B5EAD7', '#E2F0CB', '#FFDAC1', '#C7CEEA', '#F8B195',
        '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#99B898',
        '#FECEAB', '#FF847C', '#E84A5F', '#2A363B', '#A8E6CE'
    ];

    // Data chart saat ini
    let currentData = {
        labels: [],
        values: [],
        pointColors: [],
        borderColor: '#1E90FF',
        bgColor: 'rgba(100, 149, 237, 0.4)',
        highlightIndex: -1,
        points: []
    };

    // Indeks grup saat ini
    let currentGroupIndex = 0;
    const studentsPerGroup = 8;

    // Elemen DOM
    const canvas = document.getElementById('radarCanvas');
    const ctx = canvas.getContext('2d');
    const labelsContainer = document.getElementById('radarLabels');
    const tooltip = document.getElementById('radarTooltip');
    const nextBtn = document.getElementById('nextBtn');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const dataTypeSelect = document.getElementById('dataType');
    
    // Ukuran dan posisi
    const center = canvas.width / 2;
    const radius = center * 0.8;
    const levels = 5;
    
    // Fungsi untuk memuat grup mahasiswa berikutnya
    function loadNextGroup() {
        const startIndex = currentGroupIndex * studentsPerGroup;
        const endIndex = startIndex + studentsPerGroup;
        
        if (startIndex >= allStudents.length) {
            currentGroupIndex = 0;
            return loadNextGroup();
        }
        
        const currentGroup = allStudents.slice(startIndex, endIndex);
        updateChartData(currentGroup);
        currentGroupIndex++;
    }
    
    // Fungsi untuk mencari NIM tertentu
    function searchNIM() {
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) return;
        
        const foundStudent = allStudents.find(student => 
            student.nim.includes(searchTerm)
        );
        
        if (foundStudent) {
            if (currentData.labels.includes(foundStudent.nim)) {
                currentData.highlightIndex = currentData.labels.indexOf(foundStudent.nim);
                drawRadarChart();
                return;
            }
            
            for (let i = 0; i < Math.ceil(allStudents.length / studentsPerGroup); i++) {
                const start = i * studentsPerGroup;
                const end = start + studentsPerGroup;
                const group = allStudents.slice(start, end);
                
                if (group.some(s => s.nim === foundStudent.nim)) {
                    currentGroupIndex = i + 1;
                    updateChartData(group);
                    currentData.highlightIndex = group.findIndex(s => s.nim === foundStudent.nim);
                    drawRadarChart();
                    break;
                }
            }
        } else {
            alert('NIM tidak ditemukan');
        }
    }
    
    // Fungsi untuk mengupdate data chart berdasarkan tipe yang dipilih
    function updateChartData(students) {
        const dataType = dataTypeSelect.value;
        
        currentData.labels = students.map(student => student.nim);
        currentData.values = students.map(student => {
            switch(dataType) {
                case 'uts': return student.uts;
                case 'uas': return student.uas;
                default: return student.total;
            }
        });
        currentData.pointColors = pointColors.slice(0, students.length);
        currentData.highlightIndex = -1;
        
        drawRadarChart();
        addLabels();
    }
    
    // Fungsi untuk menggambar radar chart
    function drawRadarChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const existingLevelLabels = document.querySelectorAll('.radar-level-label');
        existingLevelLabels.forEach(label => label.remove());
        
        if (currentData.labels.length === 0) return;
        
        const angleSlice = Math.PI * 2 / currentData.labels.length;
        
        // Gambar grid lingkaran
        for (let level = 1; level <= levels; level++) {
            const levelRadius = radius * (level / levels);
            
            ctx.beginPath();
            ctx.strokeStyle = level === levels ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = level === levels ? 1.5 : 1;
            
            for (let i = 0; i <= currentData.labels.length; i++) {
                const angle = angleSlice * i - Math.PI / 2;
                const x = center + Math.cos(angle) * levelRadius;
                const y = center + Math.sin(angle) * levelRadius;
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.closePath();
            ctx.stroke();
            
            // Tambahkan label level
            const levelValue = level * 20;
            const labelX = center;
            const labelY = center - levelRadius - 10;
            
            const levelLabel = document.createElement('div');
            levelLabel.className = 'radar-level-label';
            levelLabel.textContent = levelValue;
            levelLabel.style.left = `${labelX}px`;
            levelLabel.style.top = `${labelY}px`;
            levelLabel.setAttribute('data-level', level);
            labelsContainer.appendChild(levelLabel);
        }
        
        // Gambar garis axis
        for (let i = 0; i < currentData.labels.length; i++) {
            const angle = angleSlice * i - Math.PI / 2;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.lineWidth = 1.2;
            ctx.moveTo(center, center);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        // Gambar area data
        ctx.beginPath();
        for (let i = 0; i < currentData.labels.length; i++) {
            const value = currentData.values[i];
            const angle = angleSlice * i - Math.PI / 2;
            const pointRadius = radius * (value / 100);
            const x = center + Math.cos(angle) * pointRadius;
            const y = center + Math.sin(angle) * pointRadius;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(70, 130, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(100, 149, 237, 0.6)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = currentData.borderColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        
        // Gambar titik data
        currentData.points = [];
        for (let i = 0; i < currentData.labels.length; i++) {
            const value = currentData.values[i];
            const angle = angleSlice * i - Math.PI / 2;
            const pointRadius = radius * (value / 100);
            const x = center + Math.cos(angle) * pointRadius;
            const y = center + Math.sin(angle) * pointRadius;
            
            currentData.points[i] = { x, y };
            
            // Lingkaran luar
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
            
            // Lingkaran dalam berwarna
            ctx.beginPath();
            ctx.fillStyle = currentData.pointColors[i];
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1.5;
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Efek glow
            ctx.shadowColor = currentData.pointColors[i];
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Highlight
            if (i === currentData.highlightIndex) {
                ctx.beginPath();
                ctx.strokeStyle = '#FF0000';
                ctx.lineWidth = 3;
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.stroke();
                
                ctx.shadowColor = '#FF0000';
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }
    }
    
    // Tambahkan label NIM
    function addLabels() {
        const existingLabels = document.querySelectorAll('.radar-label[data-type="nim"]');
        existingLabels.forEach(label => label.remove());
        
        if (currentData.labels.length === 0) return;
        
        const angleSlice = Math.PI * 2 / currentData.labels.length;
        
        for (let i = 0; i < currentData.labels.length; i++) {
            const angle = angleSlice * i - Math.PI / 2;
            const labelRadius = radius * 1.05;
            const x = center + Math.cos(angle) * labelRadius;
            const y = center + Math.sin(angle) * labelRadius;
            
            const label = document.createElement('div');
            label.className = 'radar-label';
            label.setAttribute('data-type', 'nim');
            label.textContent = currentData.labels[i];
            label.style.left = `${x}px`;
            label.style.top = `${y}px`;
            
            if (i === currentData.highlightIndex) {
                label.style.fontWeight = 'bold';
                label.style.color = '#FF0000';
                label.style.textShadow = '0 0 3px rgba(255, 0, 0, 0.3)';
            }
            
            if (i === 0) {
                label.style.top = `${y - 15}px`;
            }
            
            labelsContainer.appendChild(label);
        }
    }
    
    // Setup interaksi tooltip
    function setupInteractions() {
        canvas.addEventListener('mousemove', function(e) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            let hoveredIndex = -1;
            
            if (currentData.points) {
                for (let i = 0; i < currentData.points.length; i++) {
                    const point = currentData.points[i];
                    const distance = Math.sqrt(
                        Math.pow(mouseX - point.x, 2) + 
                        Math.pow(mouseY - point.y, 2)
                    );
                    
                    if (distance < 15) {
                        hoveredIndex = i;
                        break;
                    }
                }
            }
            
            if (hoveredIndex >= 0) {
                const point = currentData.points[hoveredIndex];
                const dataType = dataTypeSelect.value;
                const dataTypeText = dataType === 'uts' ? 'UTS' : (dataType === 'uas' ? 'UAS' : 'Total');
                tooltip.innerHTML = `<strong>NIM: ${currentData.labels[hoveredIndex]}</strong><br>Nilai ${dataTypeText}: ${currentData.values[hoveredIndex]}`;
                tooltip.style.left = `${e.clientX + 15}px`;
                tooltip.style.top = `${e.clientY - 30}px`;
                tooltip.style.opacity = '1';
            } else {
                tooltip.style.opacity = '0';
            }
        });
        
        canvas.addEventListener('mouseout', function() {
            tooltip.style.opacity = '0';
        });
    }
    
    // Event listeners
    nextBtn.addEventListener('click', loadNextGroup);
    searchBtn.addEventListener('click', searchNIM);
    resetBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentGroupIndex = 0;
        currentData.highlightIndex = -1;
        loadNextGroup();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchNIM();
        }
    });
    
    dataTypeSelect.addEventListener('change', function() {
        // Reload current group with new data type
        const startIndex = (currentGroupIndex - 1) * studentsPerGroup;
        const endIndex = startIndex + studentsPerGroup;
        const currentGroup = allStudents.slice(startIndex, endIndex);
        updateChartData(currentGroup);
    });
    
    // Inisialisasi
    loadNextGroup();
    setupInteractions();
});