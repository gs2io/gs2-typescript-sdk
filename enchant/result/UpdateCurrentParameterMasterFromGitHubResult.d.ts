import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class UpdateCurrentParameterMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Enchant.CurrentParameterMaster | null;
    setItem(item: Gs2Enchant.CurrentParameterMaster | null): this;
    withItem(item: Gs2Enchant.CurrentParameterMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentParameterMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
