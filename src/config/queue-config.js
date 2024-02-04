const amqplib = require('amqplib');

let channel, connection;

async function connectQueue() {
    try {
        connection = await amqplib.connect("amqp://localhost");
        channel = await connection.createChannel();

        await channel.assertQueue('noti-queue');
        channel.sendToQueue('noti-queue', Buffer.from('one more, 1,2,3,4'));
    } catch(error) {
        console.log(error);
    }
}

async function sendData(data) {
    try {
        await channel.sendToQueue('noti-queue', Buffer.from(JSON.stringify(data)));
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    connectQueue,
    sendData,
}