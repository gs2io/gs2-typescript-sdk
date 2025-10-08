import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeQuestGroupModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Quest.QuestGroupModelMaster[] | null;
    setItems(items: Gs2Quest.QuestGroupModelMaster[] | null): this;
    withItems(items: Gs2Quest.QuestGroupModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestGroupModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
