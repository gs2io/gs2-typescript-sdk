import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Deploy from '../model';
export declare class GetEventResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Event | null;
    setItem(item: Gs2Deploy.Event | null): this;
    withItem(item: Gs2Deploy.Event | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventResult;
    toDict(): {
        [key: string]: any;
    };
}
