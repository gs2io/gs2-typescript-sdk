import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class UpdateCurrentModelMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.CurrentModelMaster | null;
    setItem(item: Gs2Matchmaking.CurrentModelMaster | null): this;
    withItem(item: Gs2Matchmaking.CurrentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentModelMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
