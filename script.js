document.getElementById('notify-department').addEventListener('click', function() {
    const department = document.getElementById('department-select').value;
    sendNotification(department);
});

function sendNotification(department) {
    // Simular o envio de notificação
    const messageElement = document.getElementById('message');
    messageElement.innerText = `Notificação enviada para ${department}.`;

    // Simulação de envio de notificação
    console.log(`Notificação enviada para ${department}.`);
}