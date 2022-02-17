import IResult from '../../core/interface/IResult';
import * as Gs2Script from '../model';
export default class UpdateScriptFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Script.Script | null;
    setItem(item: Gs2Script.Script | null): this;
    withItem(item: Gs2Script.Script | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateScriptFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
