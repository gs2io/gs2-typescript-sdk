import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class UpdateCurrentEntryMasterResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.CurrentEntryMaster | null;
    setItem(item: Gs2Dictionary.CurrentEntryMaster | null): this;
    withItem(item: Gs2Dictionary.CurrentEntryMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentEntryMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
