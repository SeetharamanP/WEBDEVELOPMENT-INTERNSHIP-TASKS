// Function to display issues
function displayIssues() {
    const issueList = document.getElementById('issue-list');
    issueList.innerHTML = '';

    // Fetch issues from the backend (or use dummy data for now)
    const issues = [
        { id: 1, title: 'Sample Issue 1', description: 'Description of issue 1', priority: 'High', assignedTo: 'John' },
        { id: 2, title: 'Sample Issue 2', description: 'Description of issue 2', priority: 'Medium', assignedTo: 'Alice' },
        // Other issues...
    ];

    issues.forEach(issue => {
        const issueDiv = document.createElement('div');
        issueDiv.innerHTML = `
            <h2>${issue.title}</h2>
            <p>Description: ${issue.description}</p>
            <p>Priority: ${issue.priority}</p>
            <p>Assigned To: ${issue.assignedTo}</p>
            <button onclick="editIssue(${issue.id})">Edit</button>
            <button onclick="deleteIssue(${issue.id})">Delete</button>
        `;
        issueList.appendChild(issueDiv);
    });
}

// Function to show create issue form
function showCreateForm() {
    document.getElementById('create-issue').style.display = 'block';
    // Populate form fields, if needed
}

// Function to submit a new issue
function createIssue() {
    // Get form data and send it to the backend
    // Update issue list after successful creation
    displayIssues();
    hideForms();
}

// Function to show update issue form
function editIssue(id) {
    document.getElementById('update-issue').style.display = 'block';
    // Populate form fields with issue data for editing
}

// Function to update an issue
function updateIssue() {
    // Get updated data and send it to the backend
    // Update issue list after successful update
    displayIssues();
    hideForms();
}

// Function to delete an issue
function deleteIssue(id) {
    // Send delete request to the backend
    // Update issue list after successful deletion
    displayIssues();
}

// Function to hide forms
function hideForms() {
    document.getElementById('create-issue').style.display = 'none';
    document.getElementById('update-issue').style.display = 'none';
}

// Display initial issues when the page loads
displayIssues();
