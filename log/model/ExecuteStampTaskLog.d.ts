import IModel from '../../core/interface/IModel';
export default class ExecuteStampTaskLog implements IModel {
    private timestamp;
    private taskId;
    private service;
    private method;
    private userId;
    private action;
    private args;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getTaskId(): string | null;
    setTaskId(taskId: string | null): this;
    withTaskId(taskId: string | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getMethod(): string | null;
    setMethod(method: string | null): this;
    withMethod(method: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExecuteStampTaskLog | null;
    toDict(): {
        [key: string]: any;
    };
}
