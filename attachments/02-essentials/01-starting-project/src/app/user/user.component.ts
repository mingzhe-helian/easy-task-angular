import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  user = input.required<User>();

  select = output<string>();

  imagePath = computed(() => {return `assets/users/${this.user().avatar}`})

  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }

  onSelectUser() {
    this.select.emit(this.user().id);
  }

}
