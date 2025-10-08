import IModel from '../../core/interface/IModel';
export default class Reward implements IModel {
    private action;
    private request;
    private itemId;
    private value;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getRequest(): string | null;
    setRequest(request: string | null): this;
    withRequest(request: string | null): this;
    getItemId(): string | null;
    setItemId(itemId: string | null): this;
    withItemId(itemId: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Reward | null;
    toDict(): {
        [key: string]: any;
    };
}
