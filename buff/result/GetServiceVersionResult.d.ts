import IResult from '../../core/interface/IResult';
export default class GetServiceVersionResult implements IResult {
    private item;
    getItem(): string | null;
    setItem(item: string | null): this;
    withItem(item: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetServiceVersionResult;
    toDict(): {
        [key: string]: any;
    };
}
