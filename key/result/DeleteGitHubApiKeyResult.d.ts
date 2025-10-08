import IResult from '../../core/interface/IResult';
import * as Gs2Key from '../model';
export default class DeleteGitHubApiKeyResult implements IResult {
    private item;
    getItem(): Gs2Key.GitHubApiKey | null;
    setItem(item: Gs2Key.GitHubApiKey | null): this;
    withItem(item: Gs2Key.GitHubApiKey | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGitHubApiKeyResult;
    toDict(): {
        [key: string]: any;
    };
}
