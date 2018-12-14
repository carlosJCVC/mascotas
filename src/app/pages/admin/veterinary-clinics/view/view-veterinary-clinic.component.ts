import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VeterinaryClinicService } from '../../../../services/veterinary-clinic.service';

@Component({
  selector: 'app-view-clinic',
  templateUrl: './view-veterinary-clinic.component.html',
  styleUrls: ['./view-veterinary-clinic.component.scss']
})

export class ViewVeterinaryClinicComponent implements OnInit {

  constructor (private router: Router, private activatedRoute: ActivatedRoute, private clinicService: VeterinaryClinicService) {}

  private id;
  private sub;
  public clinic;

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.findClinic(this.id);
    });
  }

  findClinic(id) {
    this.clinicService.getOne(id).subscribe(res => {
      this.clinic = res;
    });
  }
}
