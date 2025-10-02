
// College data structure with ALL colleges from the PDF
let colleges = [
    {
        id: 1,
        priority: 1,
        code: "C463GX",
        name: "R.V. COLLEGE OF ENGINEERING, R.V. VIDYANIKETAN POST, MYSORE ROAD, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "132", "gm": "31" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 2,
        priority: 2,
        code: "C445GX",
        name: "M. S. RAMAIAH INSTITUTE OF TECHNOLOGY-MCA VIDYA SOUPIA, MSRIT POST, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "340", "gm": "193" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 3,
        priority: 3,
        code: "C414GX",
        name: "BMS COLLEGE OF ENGINEERING, POST BOX NO 1908, BULL TEMPLE ROAD, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "184", "gm": "114" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 4,
        priority: 4,
        code: "C457GX",
        name: "PES UNIVERSITY, RING ROAD CAMPUS, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "493", "gm": "320" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 5,
        priority: 5,
        code: "C422GX",
        name: "DAYANANDA SAGAR COLLEGE OF ENGINEERING SHAVIGE MALLESHWARA HILLS, KUMARASWAMY LAYOUT, BANGALORE-560078",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "501", "gm": "441" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 6,
        priority: 6,
        code: "C468GX",
        name: "RNS INSTITUTE OF TECHNOLOGY CHANNASANDRA, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "686", "gm": "656" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 7,
        priority: 7,
        code: "C415",
        name: "BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT POST BOX NO 6443 AVALAHALLI BANGALORE",
        location: "Bangalore",
        fee: "68,850",
        rank2023: { "1g": "1309", "gm": "636" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 8,
        priority: 8,
        code: "C411GX",
        name: "BANGALORE INSTITUTE OF TECHNOLOGY, K.R ROAD, V.V.PURAM, BANGALORE-560004",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "1196", "gm": "797" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 9,
        priority: 9,
        code: "C421GX",
        name: "DAYANANDA SAGAR COLLEGE OF ARTS,SCIENCE & COMMERCE, SHAVIGE MALLESHWARA HILLS, KUMARASWAMY LAYOUT, BANGALORE-560078",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 10,
        priority: 10,
        code: "C592GX",
        name: "M.S RAMAIAH COLLEGE OF ARTS, SCIENCE & COMMERCE, SURVEY NO 20, CHIKKAMARANAHALLI, MSR NAGAR",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2948", "gm": "1186" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 11,
        priority: 11,
        code: "C453GX",
        name: "NEW HORIZON COLLEGE OF ENGINEERING (MAT), RING ROAD, NEAR MARATHALLI, BELLANDUR POST, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "1197", "gm": "1258" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 12,
        priority: 12,
        code: "C576GX",
        name: "RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT KOTHANUR, 8TH PHASE J.P.NAGAR, BENGALURU-560078",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2707", "gm": "1304" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 13,
        priority: 13,
        code: "C420GX",
        name: "CMR INSTITUTE OF TECHNOLOGY, 132, AECS LAYOUT, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2714", "gm": "1378" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 14,
        priority: 14,
        code: "C466GX",
        name: "REVA UNIVERSITY, RUKMINI KNOWLEDGE PARK, YELAHANKA, BANGALORE-560064",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "1740", "gm": "1604" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 15,
        priority: 15,
        code: "C425GX",
        name: "DR. AMBEDKAR INSTITUTE OF TECHNOLOGY, OUTER RING ROAD, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 16,
        priority: 16,
        code: "C503GX",
        name: "DAYANANDA SAGAR ACADEMY OF TECHNOLOGY AND MANAGEMENT, UDAYAPURA, KANAKAPURA MAIN ROAD OPP. ART OF LIVING INTERNATIONAL CENTER, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2917", "gm": "1827" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 17,
        priority: 17,
        code: "C451GX",
        name: "MOUNT CARMEL COLLEGE, NO. 58, PALACE ROAD, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2854", "gm": "1634" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 18,
        priority: 18,
        code: "C526GX",
        name: "CHRIST ACADEMY INSTITUTE FOR ADVANCED STUDIES CHRIST NAGAR, HULLAHALLI, BEGUR - KOPPA ROAD, SAKKALAWARA POST, BANGALORE -560083",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 19,
        priority: 19,
        code: "C534GX",
        name: "JSS ACADEMY OF TECHNICAL EDUCATION, JSSATE CAMPUS, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "3081", "gm": "1627" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 20,
        priority: 20,
        code: "C520GX",
        name: "DAYANANDA SAGAR UNIVERSITY, CITY CAMPUS KUDLU GATE, HOSUR ROAD, BANGALORE-560114",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "3041", "gm": "1461" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 21,
        priority: 21,
        code: "C401GX",
        name: "ACHARYA INSTITUTE OF MANAGEMENT AND SCIENCES PEENYA, BANGALORE",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "2650", "gm": "1896" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 22,
        priority: 22,
        code: "C524GX",
        name: "ACHARYA INSTITUTE OF TECHNOLOGY SOLDEVANAHALLI, HESARAGHATTA MAIN ROAD, BANGALORE -560090",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "3442", "gm": "2509" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 23,
        priority: 23,
        code: "C402GX",
        name: "ACHARYA INSTITUTE OF GRADUATE STUDIES, DR. SARVEPALLI RADHAKRISHNAN ROAD, SOLADEVANAHALLI HESARAGATTA MAIN ROAD, BANGALORE - 560107",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "3442", "gm": "2509" },
        mock: { "1g": "", "gm": "" }
    },
    {
        id: 24,
        priority: 24,
        code: "CS276X",
        name: "CMR UNIVERSITY NO.5, BHUVANAGIRI, OMBR LAYOUT, BANGALORE-43",
        location: "Bangalore",
        fee: "68,560",
        rank2023: { "1g": "", "gm": "" },
        rank2024: { "1g": "", "gm": "" },
        mock: { "1g": "", "gm": "" }
    }
];

// DOM elements
const collegeTableBody = document.getElementById('collegeTableBody');
const collegeModal = new bootstrap.Modal(document.getElementById('collegeModal'));
const collegeForm = document.getElementById('collegeForm');
const saveCollegeBtn = document.getElementById('saveCollegeBtn');
const addCollegeBtn = document.getElementById('addCollegeBtn');
const printBtn = document.getElementById('printBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderCollegeTable();
    
    // Event listeners
    addCollegeBtn.addEventListener('click', openAddCollegeModal);
    saveCollegeBtn.addEventListener('click', saveCollege);
    printBtn.addEventListener('click', printTable);
});

// Render college table
function renderCollegeTable() {
    collegeTableBody.innerHTML = '';
    
    // Sort colleges by priority
    colleges.sort((a, b) => a.priority - b.priority);
    
    colleges.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.priority}</td>
            <td>${college.code}</td>
            <td>
                <div class="fw-bold">${college.name}</div>
                <small class="text-muted">Fee: ₹${college.fee}</small>
            </td>
            <td>
                <span class="badge bg-primary">${college.location}</span>
            </td>
            <td>${college.rank2023["1g"] || '-'}</td>
            <td>${college.rank2023["gm"] || '-'}</td>
            <td>${college.rank2024["1g"] || '-'}</td>
            <td>${college.rank2024["gm"] || '-'}</td>
            <td>${college.mock["1g"] || '-'}</td>
            <td>${college.mock["gm"] || '-'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-outline-primary edit-btn" data-id="${college.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${college.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        collegeTableBody.appendChild(row);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const collegeId = parseInt(this.getAttribute('data-id'));
            editCollege(collegeId);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const collegeId = parseInt(this.getAttribute('data-id'));
            deleteCollege(collegeId);
        });
    });
}

// Open modal for adding a new college
function openAddCollegeModal() {
    document.getElementById('collegeModalLabel').textContent = 'Add New College';
    collegeForm.reset();
    document.getElementById('collegeId').value = '';
    collegeModal.show();
}

// Edit college
function editCollege(id) {
    const college = colleges.find(c => c.id === id);
    if (college) {
        document.getElementById('collegeModalLabel').textContent = 'Edit College';
        document.getElementById('collegeId').value = college.id;
        document.getElementById('priority').value = college.priority;
        document.getElementById('collegeCode').value = college.code;
        document.getElementById('collegeName').value = college.name;
        document.getElementById('location').value = college.location;
        document.getElementById('courseFee').value = college.fee;
        document.getElementById('rank2023_1g').value = college.rank2023["1g"];
        document.getElementById('rank2023_gm').value = college.rank2023["gm"];
        document.getElementById('rank2024_1g').value = college.rank2024["1g"];
        document.getElementById('rank2024_gm').value = college.rank2024["gm"];
        document.getElementById('mock_1g').value = college.mock["1g"];
        document.getElementById('mock_gm').value = college.mock["gm"];
        
        collegeModal.show();
    }
}

// Save college (add or update)
function saveCollege() {
    const collegeId = document.getElementById('collegeId').value;
    const priority = parseInt(document.getElementById('priority').value);
    const code = document.getElementById('collegeCode').value;
    const name = document.getElementById('collegeName').value;
    const location = document.getElementById('location').value;
    const fee = document.getElementById('courseFee').value;
    
    const rank2023_1g = document.getElementById('rank2023_1g').value;
    const rank2023_gm = document.getElementById('rank2023_gm').value;
    const rank2024_1g = document.getElementById('rank2024_1g').value;
    const rank2024_gm = document.getElementById('rank2024_gm').value;
    const mock_1g = document.getElementById('mock_1g').value;
    const mock_gm = document.getElementById('mock_gm').value;
    
    if (!collegeId) {
        // Add new college
        const newCollege = {
            id: colleges.length > 0 ? Math.max(...colleges.map(c => c.id)) + 1 : 1,
            priority: priority,
            code: code,
            name: name,
            location: location,
            fee: fee,
            rank2023: { "1g": rank2023_1g, "gm": rank2023_gm },
            rank2024: { "1g": rank2024_1g, "gm": rank2024_gm },
            mock: { "1g": mock_1g, "gm": mock_gm }
        };
        
        colleges.push(newCollege);
    } else {
        // Update existing college
        const index = colleges.findIndex(c => c.id === parseInt(collegeId));
        if (index !== -1) {
            colleges[index] = {
                ...colleges[index],
                priority: priority,
                code: code,
                name: name,
                location: location,
                fee: fee,
                rank2023: { "1g": rank2023_1g, "gm": rank2023_gm },
                rank2024: { "1g": rank2024_1g, "gm": rank2024_gm },
                mock: { "1g": mock_1g, "gm": mock_gm }
            };
        }
    }
    
    collegeModal.hide();
    renderCollegeTable();
    
    // Save to localStorage
    saveToLocalStorage();
}

// Delete college
function deleteCollege(id) {
    if (confirm('Are you sure you want to delete this college?')) {
        colleges = colleges.filter(c => c.id !== id);
        renderCollegeTable();
        
        // Save to localStorage
        saveToLocalStorage();
    }
}

// Print table
function printTable() {
    window.print();
}

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('pgcetColleges', JSON.stringify(colleges));
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedColleges = localStorage.getItem('pgcetColleges');
    if (savedColleges) {
        colleges = JSON.parse(savedColleges);
    }
}
