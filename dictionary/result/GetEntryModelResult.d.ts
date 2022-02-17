import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class GetEntryModelResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.EntryModel | null;
    setItem(item: Gs2Dictionary.EntryModel | null): this;
    withItem(item: Gs2Dictionary.EntryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEntryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
