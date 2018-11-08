import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { InputComponent } from '../fields/input/input.component';
import { ButtonComponent } from '../fields/button/button.component';
import { SelectComponent } from '../fields/select/select.component';


const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})

export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
