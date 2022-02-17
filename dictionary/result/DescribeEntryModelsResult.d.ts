import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DescribeEntryModelsResult implements IResult {
    private items;
    getItems(): Gs2Dictionary.EntryModel[] | null;
    setItems(items: Gs2Dictionary.EntryModel[] | null): this;
    withItems(items: Gs2Dictionary.EntryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEntryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
