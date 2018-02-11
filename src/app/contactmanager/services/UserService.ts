import { Injectable } from '@angular/core';
import User from '../models/User';
import Spark from '../../data/Spark';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import Note from '../models/Note';

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
            let users: User[] = [];
            data.forEach(user => {
                let notes: Note[] = [];
                if (user.notes){
                    user.notes = Object.values(user.notes);
                    user.notes.forEach(note => {
                        notes.push(this.noteFactory(note));
                    });
                    user.notes = notes;
                }
                users.push(this.userFactory(user));
            });
            this.dataStore.users = users;
            console.log(this.dataStore.users);
            this._users.next(this.dataStore.users);
        });
    }

    userById(id: number): User{
        return this.dataStore.users.find(x => x.id == id);
    }

    get users(): Observable<User[]>{
        return this._users.asObservable();
    }

    userFactory(obj: any): User{
        let user = new User();
        user.id = obj.id;
        user.birthDate = obj.birthDate;
        user.name = obj.name;
        user.avatar = obj.avatar;
        user.bio = obj.bio;
        user.notes = obj.notes;
        return user;
    }

    noteFactory(obj: any): Note{
        let note = new Note();
        note.title = obj.title;
        note.date = obj.date;
        note.id = obj.id;
        return note;
    }
}