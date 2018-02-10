import { Injectable } from '@angular/core';
import User from '../models/user';
import Spark from '../../data/Spark';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class UserService {

    public path: string = 'users/';
    
    private _users: BehaviorSubject<User[]>;
    private dataStore: {
        users: User[];
    }

    constructor(private spark: Spark){
        this.dataStore = { users: [] };
        this._users = new BehaviorSubject<User[]>([]); // this and next method are part of passing a listener to the html
    }

    loadAll(){
        // this.spark.getAsArray(this.path).then(data => {
        //     this.dataStore.users = <User[]>data;
        // });
        this.spark.subscribeToArray(this.path, data => {
            this.dataStore.users = <User[]>data;
            this._users.next(this.dataStore.users);
        });
    }

    get users(): Observable<User[]>{
        return this._users.asObservable();
    }
}