import IResult from '../../core/interface/IResult';
import * as Gs2Script from '../model';
export default class CreateScriptResult implements IResult {
    private item;
    getItem(): Gs2Script.Script | null;
    setItem(item: Gs2Script.Script | null): this;
    withItem(item: Gs2Script.Script | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateScriptResult;
    toDict(): {
        [key: string]: any;
    };
}
