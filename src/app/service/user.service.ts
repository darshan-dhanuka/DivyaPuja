import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }



    register(user: User) {
        return this.http.post(`http://172.31.37.76:3000/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://172.31.37.76:3000/users/${id}`);
    }
}