import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../field.interface";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styles: []
})

export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  
  constructor() {}
  
  ngOnInit() {}
}