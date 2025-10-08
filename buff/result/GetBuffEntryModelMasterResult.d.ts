import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class GetBuffEntryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Buff.BuffEntryModelMaster | null;
    setItem(item: Gs2Buff.BuffEntryModelMaster | null): this;
    withItem(item: Gs2Buff.BuffEntryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBuffEntryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
