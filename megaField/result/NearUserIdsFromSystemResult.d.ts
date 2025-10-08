import IResult from '../../core/interface/IResult';
export default class NearUserIdsFromSystemResult implements IResult {
    private items;
    getItems(): string[] | null;
    setItems(items: string[] | null): this;
    withItems(items: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NearUserIdsFromSystemResult;
    toDict(): {
        [key: string]: any;
    };
}
