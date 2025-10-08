import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class UpdateCurrentFieldMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2MegaField.CurrentFieldMaster | null;
    setItem(item: Gs2MegaField.CurrentFieldMaster | null): this;
    withItem(item: Gs2MegaField.CurrentFieldMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentFieldMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
