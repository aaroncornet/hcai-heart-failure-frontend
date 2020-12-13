import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewContainerRef
} from '@angular/core';
import {Patient} from '../models/Patient';

@Directive({
  selector: '[switch-component]',
})
export class DynamicHostDirective implements OnInit {
  @Input('switch-component') component: Type<any>;
  @Input('entity') entity: Patient;
  @Output() questionEvent = new EventEmitter();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.switchToNewComponent();
  }

  ngOnChanges(): void {
    this.switchToNewComponent();
  }

  switchToNewComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.component,
    );

    this.viewContainerRef.clear();
    let ref = this.viewContainerRef.createComponent(componentFactory);
    ref.instance.patient = this.entity;
    ref.instance.questionEvent = this.questionEvent;
    this.cdr.detectChanges();
  }
}
