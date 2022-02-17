import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Deploy from '../model';
export declare class GetStackResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Stack | null;
    setItem(item: Gs2Deploy.Stack | null): this;
    withItem(item: Gs2Deploy.Stack | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStackResult;
    toDict(): {
        [key: string]: any;
    };
}
