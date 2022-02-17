import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class CreateEntryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.EntryModelMaster | null;
    setItem(item: Gs2Dictionary.EntryModelMaster | null): this;
    withItem(item: Gs2Dictionary.EntryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateEntryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
