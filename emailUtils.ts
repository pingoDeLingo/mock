import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'juku@juurikas.ee',
        pass: 'kala',
    },
});

function sendLog(content: string) {
    let mailOptions = {
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content,
    };
    transporter.sendMail(mailOptions);
}

function fakeInit() {
    console.log('Käivitus kell ' + new Date());
}

function initApp(freeMemory: number, freeDisk: number, mailFn: any, initFn: any) {
    if (freeMemory < 100000) {
        mailFn('Vaba mälu ainult ' + freeMemory);
        return;
    }
    if (freeDisk < 1000000) {
        mailFn('Vaba kettaruumi ainult ' + freeMemory + ' baiti');
        return;
    }
    initFn();
    mailFn('Rakendus käivitus');
}

export { sendLog, fakeInit, initApp };