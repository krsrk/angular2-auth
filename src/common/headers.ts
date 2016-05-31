import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Access-Control-Allow-Origin', '*');
contentHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
contentHeaders.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS');
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('x-id', '1');
contentHeaders.append('Content-Type', 'application/json');
