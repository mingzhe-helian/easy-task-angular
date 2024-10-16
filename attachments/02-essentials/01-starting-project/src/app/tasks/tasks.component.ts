import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  name = input.required<string>();
  userId = input.required<string>();

  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId())
  }

  onCompleteTas(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData ) {
    this.tasks.push({
      id: new Date().getDate().toString(),
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })

    this.isAddingTask = false;
  }

}
