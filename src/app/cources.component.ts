import { CourcesServices } from './course/cources.service';
import {Component} from '@angular/core'

@Component({
    selector: 'cources',
    template: `<h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let cource of cources">
        {{cource}}
        </li>
    </ul>
    `
})
export class CourcesComponent{
    title="List Of Cources";
    cources;
    getTitle(){
        return this.title;
       
    }
    constructor(service:CourcesServices){//do it here
        //let service = new CourcesServices();//not necessory to do here
        this.cources = service.getCource();
    }
}