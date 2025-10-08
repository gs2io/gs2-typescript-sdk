import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DeleteIgnoreUserByGuildNameResult implements IResult {
    private item;
    getItem(): Gs2Guild.IgnoreUser | null;
    setItem(item: Gs2Guild.IgnoreUser | null): this;
    withItem(item: Gs2Guild.IgnoreUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteIgnoreUserByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
