import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeGuildModelsResult implements IResult {
    private items;
    getItems(): Gs2Guild.GuildModel[] | null;
    setItems(items: Gs2Guild.GuildModel[] | null): this;
    withItems(items: Gs2Guild.GuildModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGuildModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
