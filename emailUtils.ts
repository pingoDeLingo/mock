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

function initApp(freeMemory: number, mailFn: any) {
    if (freeMemory < 100000) {
        mailFn('Vaba mälu ainult ' + freeMemory);
        return;
    }
    mailFn('Rakendus käivitus');
}

export { sendLog, initApp };