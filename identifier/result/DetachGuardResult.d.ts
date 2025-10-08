import IResult from '../../core/interface/IResult';
export default class DetachGuardResult implements IResult {
    private items;
    getItems(): string[] | null;
    setItems(items: string[] | null): this;
    withItems(items: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DetachGuardResult;
    toDict(): {
        [key: string]: any;
    };
}
