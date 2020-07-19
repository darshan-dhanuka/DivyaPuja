import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`localhost:3000/users`);
    }

    register(user: User) {
        return this.http.post(`localhost:3000/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`localhost:3000/users/${id}`);
    }
}