export function initApp(freeMemory: number, mailFn: any): boolean {
    if (freeMemory < 100000) {
        mailFn('Vaba mälu ainult ' + freeMemory);
        return false;
    }
    mailFn('Rakendus käivitus');
    return true;
}

export function fakeInit() {
    console.log('Käivitus kell ' + new Date());
}