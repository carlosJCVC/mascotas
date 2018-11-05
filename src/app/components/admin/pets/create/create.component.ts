import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material';
import { PetService } from '../pet.service';
import { NotificationService } from '../../../../services/notification.service';

import { Router } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-create-pet",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})

export class CreateComponent implements OnInit{

    constructor(private petServ: PetService,
        private router: Router,
        private notificationService: NotificationService,
        public dialogRef: MatDialogRef<CreateComponent>,
    ){};

    ngOnInit() {
        alert();
        this.petServ.getAll();
    }

    onClear() {
        this.petServ.form.reset();
        this.petServ.initializeFormGroup();
        this.notificationService.success(':: Submitted successfully');
    }

    onSubmit() {
        if (this.petServ.form.valid) {
            if (!this.petServ.form.get('$key').value)
                this.petServ.add(this.petServ.form.value);
            else
                this.petServ.edit(1, this.petServ.form.value);
            this.petServ.form.reset();
            this.petServ.initializeFormGroup();
            this.notificationService.success(':: Submitted successfully');
            this.onClose();
        }
    }

    onClose() {
        this.petServ.form.reset();
        this.petServ.initializeFormGroup();
        this.dialogRef.close();
    }
}