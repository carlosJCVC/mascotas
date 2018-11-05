import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    today: number = Date.now();

    events = [
        {
            id: 'id',
            title: 'Hack Meeting',
            time: '05:00 PM',
            state: 'state'
        },
        {
            id: 'id',
            title: 'CCBOOL',
            time: '05:00 PM',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Machine learning',
            time: '05:00 PM',
            state: 'state'
        },
    ];

    todolists = [
        {
            id: 'id',
            title: 'Obtener mas conocimiento de angular',
            time: 'Agregado: hace 4 dias',
        },
        {
            id: 'id',
            title: 'Configurar nuevas rutas',
            time: 'Agregado: hace 4 dias',
        },
        {
            id: 'id',
            title: 'Realizar CRUD usuarios',
            time: 'Agregado: hace 4 dias',
        },
        {
            id: 'id',
            title: 'Realizar CRUD mascotas',
            time: 'Agregado: hace 4 dias',
        },
    ];

    messages = [
        {from: 'Liss', subject: 'Hola', content: 'Hola estas ???'},
        {from: 'Nayeli', subject: 'Function', content: 'yes'},
        {from: 'Carlos', subject: 'Hola como estan', content: 'hello'},
    ];
}
