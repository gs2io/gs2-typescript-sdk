import IModel from '../../core/interface/IModel';
export default class ChangeStateEvent implements IModel {
    private taskName;
    private hash;
    private timestamp;
    getTaskName(): string | null;
    setTaskName(taskName: string | null): this;
    withTaskName(taskName: string | null): this;
    getHash(): string | null;
    setHash(hash: string | null): this;
    withHash(hash: string | null): this;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChangeStateEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
