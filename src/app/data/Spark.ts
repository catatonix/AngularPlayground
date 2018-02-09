import firebase = require('firebase/app');
import "firebase/database";
import FirebaseConfig from './FirebaseConfig';

import { Injectable } from '@angular/core';


/**
 * Class to interact with the firebase database
 * 
 * ReadMe:
 *  - Setup is done in the ./FirebaseConfig.ts file
 *  - Requires npm install --save firebase
 */

// #TODO: check about making this injectable!
// #todo: check about necessary firebase imports
@Injectable()
export default class Spark{

    private db: firebase.database.Database;

    constructor(){
        let config = new FirebaseConfig().get();
        let app: firebase.app.App = firebase.initializeApp(config);
        this.db = app.database();
    }

    read(path: string): Promise<Object>{
        return this.db.ref(path).once('value').then(snap => {
            return snap.val();
        });
    }

    write(path: string, data: Object){
        //#todo return whether success or not
        this.db.ref(path).set(data);
    }

    getAsArray(path: string): Promise<Array<Object>>{
        return this.read(path).then(data => {
            return Object.values(data);
            
        });
    }

    getNewKey(): string{
        let key = this.db.ref('').push('-').key;
        this.db.ref(key).remove();
        return key;
    }

    getRef(path: string): any{
        return this.db.ref(path);
    }

}