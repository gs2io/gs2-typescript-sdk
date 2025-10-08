import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class CreateStackFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Stack | null;
    setItem(item: Gs2Deploy.Stack | null): this;
    withItem(item: Gs2Deploy.Stack | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateStackFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
