import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }



    register(user: User) {
        return this.http.post(`https://15.206.122.255:3000/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`https://15.206.122.255:3000/users/${id}`);
    }
}