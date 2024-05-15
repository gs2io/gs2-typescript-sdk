import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
