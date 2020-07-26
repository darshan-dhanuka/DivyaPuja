import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.post(`http://localhost:3000/user`,User);
    }

    register(user: User) {
        return this.http.post(`http://localhost:3000/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:3000/users/${id}`);
    }
}