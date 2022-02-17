import IModel from '../../core/interface/IModel';
export default class ExecuteStampSheetLogCount implements IModel {
    private service;
    private method;
    private userId;
    private action;
    private count;
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
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExecuteStampSheetLogCount | null;
    toDict(): {
        [key: string]: any;
    };
}
