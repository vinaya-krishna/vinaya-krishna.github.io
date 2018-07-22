const userEmail = document.getElementById('logged-in-user-email');
userEmail.innerHTML = localStorage.getItem('email');
const tableMsg = document.getElementById("table-msg");



const url = "http://localhost:3000/messages"



var request = new Request(url , {
	method: 'GET',
	headers: new Headers({
		'Content-Type': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('authToken'),
	})
});

let str = '';

fetch(request)
    .then(res => res.json())
    .then(response => response.forEach(message => {
        str += `
        <tr>
            <td class="message-received">
                <span class="message-received-date">${new Date(message.received).toDateString()}</span>
                <br />
                <span class="message-received-time">${new Date(message.received).toTimeString().match(/\d{1,2}:\d{1,2}/)}</span>
            </td>
            <td>${message.name}</td>
            <td class="message-received-email">${message.email}</td>
            <td>${message.phone}</td>
            <td>
                <div class="message">${message.message}</div>
                <br/>
                <button type="button" id="btn-msg-replay" class="btn btn-primary float-right" data-toggle="modal" data-target="#replay-modal">
                    Reply
                </button>
            </td>
        </tr>
        `
        tableMsg.innerHTML = str;
    }));


