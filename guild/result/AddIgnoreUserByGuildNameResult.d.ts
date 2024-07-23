import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class AddIgnoreUserByGuildNameResult implements IResult {
    private item;
    private guild;
    getItem(): Gs2Guild.IgnoreUser | null;
    setItem(item: Gs2Guild.IgnoreUser | null): this;
    withItem(item: Gs2Guild.IgnoreUser | null): this;
    getGuild(): Gs2Guild.Guild | null;
    setGuild(guild: Gs2Guild.Guild | null): this;
    withGuild(guild: Gs2Guild.Guild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddIgnoreUserByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
