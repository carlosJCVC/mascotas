import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    userForm: FormGroup;
    formErrors = {
        'email': '',
        'password': ''
    };
    validationMessages = {
        'email': {
            'required': 'Please enter your email',
        },
        'password': {
            'required': 'please enter your password',
            'minlength': 'Please enter more than 4 characters',
            'maxlength': 'Please enter less than 25 characters',
        }
    };

    constructor(private router: Router, private fb: FormBuilder, public authService: AuthenticationService) {
        this.userForm = this.fb.group({
            'username': ['', [
                Validators.required,
            ]
            ],
            'password': ['', [
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
        });
    }

    ngOnInit() {
    }

    login() {
        this.authService.post(this.userForm.value).subscribe( (response: any) => {
            sessionStorage.setItem('token', response.token);
            this.router.navigate(['auth/pets/list']);
        });
    }

    cancel() {
        this.router.navigate(['']);
    }
}
