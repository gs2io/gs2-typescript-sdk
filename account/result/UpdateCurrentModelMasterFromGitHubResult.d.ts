import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class UpdateCurrentModelMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Account.CurrentModelMaster | null;
    setItem(item: Gs2Account.CurrentModelMaster | null): this;
    withItem(item: Gs2Account.CurrentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentModelMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
