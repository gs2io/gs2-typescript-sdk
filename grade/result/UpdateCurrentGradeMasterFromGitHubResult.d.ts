import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class UpdateCurrentGradeMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Grade.CurrentGradeMaster | null;
    setItem(item: Gs2Grade.CurrentGradeMaster | null): this;
    withItem(item: Gs2Grade.CurrentGradeMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentGradeMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
