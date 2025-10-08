import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class UpdateCurrentMessageMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Inbox.CurrentMessageMaster | null;
    setItem(item: Gs2Inbox.CurrentMessageMaster | null): this;
    withItem(item: Gs2Inbox.CurrentMessageMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentMessageMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
