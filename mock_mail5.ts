export function initApp(freeMemory: number,  mailFn: any): boolean{
    if(freeMemory<100000){mailFn("Vaba mälu ainult "+freeMemory); return false;}
    mailFn("Rakendus käivitus");
    return true;
}

initApp(1500000,  console.log);