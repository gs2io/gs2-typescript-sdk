import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeGuildModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.GuildModelMaster[] | null;
    setItems(items: Gs2Guild.GuildModelMaster[] | null): this;
    withItems(items: Gs2Guild.GuildModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGuildModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
