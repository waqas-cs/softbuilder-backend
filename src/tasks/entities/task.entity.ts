import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  completed: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;
}
