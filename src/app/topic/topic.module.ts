import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicListComponent } from './topic-list/topic-list.component';

@NgModule({
  declarations: [TopicCreateComponent, TopicListComponent],
  imports: [
    CommonModule
  ]
})
export class TopicModule { }
