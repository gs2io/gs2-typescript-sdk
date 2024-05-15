import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
