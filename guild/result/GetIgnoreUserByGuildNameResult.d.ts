import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class GetIgnoreUserByGuildNameResult implements IResult {
    private item;
    getItem(): Gs2Guild.IgnoreUser | null;
    setItem(item: Gs2Guild.IgnoreUser | null): this;
    withItem(item: Gs2Guild.IgnoreUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetIgnoreUserByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
