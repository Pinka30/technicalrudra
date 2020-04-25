import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { rootRenderNodes } from '@angular/core/src/view';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    dataDetails: AngularFireList<any>

    constructor(private firebasedb: AngularFireDatabase){}

    getDataList(){
        this.dataDetails = this.firebasedb.list('Laptops');
    }
}