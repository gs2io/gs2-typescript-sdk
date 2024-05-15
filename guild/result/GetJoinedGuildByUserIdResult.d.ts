import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class GetJoinedGuildByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Guild.JoinedGuild | null;
    setItem(item: Gs2Guild.JoinedGuild | null): this;
    withItem(item: Gs2Guild.JoinedGuild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJoinedGuildByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
