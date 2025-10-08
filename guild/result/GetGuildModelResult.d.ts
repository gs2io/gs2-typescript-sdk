import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class GetGuildModelResult implements IResult {
    private item;
    getItem(): Gs2Guild.GuildModel | null;
    setItem(item: Gs2Guild.GuildModel | null): this;
    withItem(item: Gs2Guild.GuildModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGuildModelResult;
    toDict(): {
        [key: string]: any;
    };
}
