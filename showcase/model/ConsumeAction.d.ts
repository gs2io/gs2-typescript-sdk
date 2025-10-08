import IModel from '../../core/interface/IModel';
export default class ConsumeAction implements IModel {
    private action;
    private request;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getRequest(): string | null;
    setRequest(request: string | null): this;
    withRequest(request: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeAction | null;
    toDict(): {
        [key: string]: any;
    };
}
