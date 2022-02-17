import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeCompletedQuestListsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Quest.CompletedQuestList[] | null;
    setItems(items: Gs2Quest.CompletedQuestList[] | null): this;
    withItems(items: Gs2Quest.CompletedQuestList[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCompletedQuestListsResult;
    toDict(): {
        [key: string]: any;
    };
}
