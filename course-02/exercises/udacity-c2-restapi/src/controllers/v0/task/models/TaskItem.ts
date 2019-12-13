import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';


@Table
export class TaskItem extends Model<TaskItem> {
    @Column
    public title!: string;

    @Column
    public isCompleted!: boolean;

    @Column
    @CreatedAt
    public createdAt: Date = new Date();
  
    @Column
    @UpdatedAt
    public updatedAt: Date = new Date();
}