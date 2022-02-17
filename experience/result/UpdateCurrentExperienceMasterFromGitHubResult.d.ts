import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class UpdateCurrentExperienceMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Experience.CurrentExperienceMaster | null;
    setItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    withItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentExperienceMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
