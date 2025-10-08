import IModel from '../../core/interface/IModel';
export default class StackEntry implements IModel {
    private stateMachineName;
    private taskName;
    getStateMachineName(): string | null;
    setStateMachineName(stateMachineName: string | null): this;
    withStateMachineName(stateMachineName: string | null): this;
    getTaskName(): string | null;
    setTaskName(taskName: string | null): this;
    withTaskName(taskName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StackEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
