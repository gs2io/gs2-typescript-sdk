import IResult from '../../core/interface/IResult';
import * as Gs2Key from '../model';
export default class DescribeGitHubApiKeysResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Key.GitHubApiKey[] | null;
    setItems(items: Gs2Key.GitHubApiKey[] | null): this;
    withItems(items: Gs2Key.GitHubApiKey[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGitHubApiKeysResult;
    toDict(): {
        [key: string]: any;
    };
}
