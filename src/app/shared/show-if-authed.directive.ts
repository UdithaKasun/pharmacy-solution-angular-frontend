import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { UserService } from './services/user.service';

@Directive({
  selector: '[showIfAuthed]'
})
export class ShowIfAuthedDirective implements OnInit {

  condition : boolean;

  constructor(private userService: UserService, private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }

  @Input() set showIfAuthed(condition: boolean) {
    this.condition = condition;
  }

}
