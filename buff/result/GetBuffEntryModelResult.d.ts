import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class GetBuffEntryModelResult implements IResult {
    private item;
    getItem(): Gs2Buff.BuffEntryModel | null;
    setItem(item: Gs2Buff.BuffEntryModel | null): this;
    withItem(item: Gs2Buff.BuffEntryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBuffEntryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
