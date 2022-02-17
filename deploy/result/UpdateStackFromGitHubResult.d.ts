import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class UpdateStackFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Stack | null;
    setItem(item: Gs2Deploy.Stack | null): this;
    withItem(item: Gs2Deploy.Stack | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStackFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
