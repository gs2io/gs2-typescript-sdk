import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class GetAcceptVersionResult implements IResult {
    private item;
    getItem(): Gs2Version.AcceptVersion | null;
    setItem(item: Gs2Version.AcceptVersion | null): this;
    withItem(item: Gs2Version.AcceptVersion | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAcceptVersionResult;
    toDict(): {
        [key: string]: any;
    };
}
