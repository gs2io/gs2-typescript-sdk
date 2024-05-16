import IModel from '../../core/interface/IModel';
export default class AppLovinMax implements IModel {
    private allowAdUnitId;
    private eventKey;
    getAllowAdUnitId(): string | null;
    setAllowAdUnitId(allowAdUnitId: string | null): this;
    withAllowAdUnitId(allowAdUnitId: string | null): this;
    getEventKey(): string | null;
    setEventKey(eventKey: string | null): this;
    withEventKey(eventKey: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AppLovinMax | null;
    toDict(): {
        [key: string]: any;
    };
}
