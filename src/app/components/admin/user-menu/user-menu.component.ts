import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'admin-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
    isOpen: boolean;

    Hari;

    @Input() currentUser = null;
    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement) {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    }


    constructor(public router: Router ,private elementRef: ElementRef, public authService: AuthenticationService) {
        this.isOpen = false;
    }


    ngOnInit() {
        this. currentUser.userName = 'fer' ;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['']);
    }
}
