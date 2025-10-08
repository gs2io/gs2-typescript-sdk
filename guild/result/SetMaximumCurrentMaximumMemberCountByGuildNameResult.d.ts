import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class SetMaximumCurrentMaximumMemberCountByGuildNameResult implements IResult {
    private item;
    private old;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    getOld(): Gs2Guild.Guild | null;
    setOld(old: Gs2Guild.Guild | null): this;
    withOld(old: Gs2Guild.Guild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetMaximumCurrentMaximumMemberCountByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
