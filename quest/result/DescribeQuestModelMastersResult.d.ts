import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeQuestModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Quest.QuestModelMaster[] | null;
    setItems(items: Gs2Quest.QuestModelMaster[] | null): this;
    withItems(items: Gs2Quest.QuestModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
