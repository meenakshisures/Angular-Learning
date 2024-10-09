import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name: string | undefined;
  isAddingTask=false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basics and advanced feaures of Angular and how to apply them',
      dueDate: '2025-12-31',
    },

    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  trackById(index: number, item: any): number {
    return item.userId;
  }
  onCompleteTaskUpdate(id:string){
    this.tasks=this.tasks.filter((task)=>task.id!==id);


  }
  onStartAddTask(){
this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
  }
}
