import { sendLog, fakeInit, initApp } from './emailUtils';

initApp(15000, 10000000, sendLog, fakeInit);