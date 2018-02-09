import firebase = require('firebase/app');
import "firebase/database";
import FirebaseConfig from './FirebaseConfig';

import { Injectable } from '@angular/core';


/**
 * Class to interact with the firebase database
 * 
 * ReadMe:
 *  - Requires npm install --save firebase
 *  - Setup below
 */

var firebaseConfig = {
    apiKey: "AIzaSyCBSeq7wRNRQQYZnxZGYt35P-6-yHvwXIg",
    authDomain: "asdsa-48c2f.firebaseapp.com",
    databaseURL: "https://asdsa-48c2f.firebaseio.com",
    projectId: "asdsa-48c2f",
    storageBucket: "asdsa-48c2f.appspot.com",
    messagingSenderId: "92593551317"
}

@Injectable()
export default class Spark {

    private db: firebase.database.Database;

    constructor() {
        let config = new FirebaseConfig().get();
        let app: firebase.app.App = firebase.initializeApp(firebaseConfig);
        this.db = app.database();
    }

    read(path: string): Promise<Object> {
        //#todo handle invalid read
        return this.db.ref(path).once('value').then(snap => {
            return snap.val();
        });
    }

    write(path: string, data: Object) {
        //#todo return whether success or not
        this.db.ref(path).set(data);
    }

    getAsArray(path: string): Promise<Array<Object>> {
        //#todo handle checking for nonexistent node
        return this.read(path).then(data => {
            return Object.values(data);

        });
    }

    getNewKey(): string {
        let key = this.db.ref('/').push('-').key;
        this.db.ref(key).remove();
        return key;
    }

    getRef(path: string): Object {
        return this.db.ref(path);
    }

}