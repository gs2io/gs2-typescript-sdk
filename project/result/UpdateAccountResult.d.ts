import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Project from '../model';
export declare class UpdateAccountResult implements IResult {
    private item;
    getItem(): Gs2Project.Account | null;
    setItem(item: Gs2Project.Account | null): this;
    withItem(item: Gs2Project.Account | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateAccountResult;
    toDict(): {
        [key: string]: any;
    };
}
