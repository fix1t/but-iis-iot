fetch('/api/systems/in')
	.then(response => response.json())
	.then(userSystems => {
		const userSystemsTableBody = document.getElementById('userSystemsTableBody');
		userSystems.forEach(system => {
			const row = document.createElement('tr');
			row.innerHTML = `
				<td>${system.id}</td>
				<td>${system.name}</td>
				<td>${system.owner_name}</td>
				<td>${system.description}</td>
				<td>
					<button class="btn btn-primary btn-sm" onclick="showSystemDetail(${system.id})">
						<i class="fas fa-info" style="padding: 0.25rem;"></i>
					</button>
				</td>
			`;
			row.id = `userSystemRow_${system.id}`;
			userSystemsTableBody.appendChild(row);
		});
	})
	.catch(error => console.error('Error fetching data:', error));
	
	// Add click event listeners to the buttons
	document.querySelectorAll('button[data-toggle="modal"]').forEach(button => {
		button.addEventListener('click', function() {
			// Store the system_id in the modal
			document.getElementById('joinRequestModal').dataset.systemId = this.dataset.systemId;
		});
	});
	
fetch('/api/systems/notIn')
.then(response => response.json())
.then(userSystems => {
	const userSystemsTableBody = document.getElementById('systemsTableBody');
	userSystems.forEach(system => {
		const row = document.createElement('tr');
		let actionCellContent;
		if (system.requestSent) {
			actionCellContent = 'SENT';
		} else {
			actionCellContent = `
				<button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#joinRequestModal" data-system-id="${system.id}">
					SEND REQUEST
				</button>
			`;
		}
		row.innerHTML = `
			<td>${system.id}</td>
			<td>${system.name}</td>
			<td>${system.owner_name}</td>
			<td>${system.description}</td>
			<td>
				${actionCellContent}
			</td>
		`;
		row.id = `userSystemRow_${system.id}`;
		userSystemsTableBody.appendChild(row);
	});

	// Add click event listeners to the buttons
	document.querySelectorAll('button[data-toggle="modal"]').forEach(button => {
		button.addEventListener('click', function() {
			// Store the system_id in the modal
			document.getElementById('joinRequestModal').dataset.systemId = this.dataset.systemId;
		});
	});
})
.catch(error => console.error('Error fetching data:', error));
	
	// Add event listener to the form
document.getElementById('joinRequestForm').addEventListener('submit', function(event) {
	event.preventDefault();

	// Get the system_id from the modal
	const system_id = document.getElementById('joinRequestModal').dataset.systemId;
	const message = document.getElementById('message').value;

	fetch(`/api/user/system/${system_id}/join-request`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ message })
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
		$('#joinRequestModal').modal('hide');
		window.location.reload();
	})
	.catch((error) => {
		console.error('Error:', error);
	});
});

// Function to show system detail and redirect to another view
function showSystemDetail(systemId) {
    // Redirect to the system detail view with the specified systemId
    window.location.href = `/systems/detail/${systemId}`;
}
    