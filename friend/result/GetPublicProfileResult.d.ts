import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class GetPublicProfileResult implements IResult {
    private item;
    getItem(): Gs2Friend.PublicProfile | null;
    setItem(item: Gs2Friend.PublicProfile | null): this;
    withItem(item: Gs2Friend.PublicProfile | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPublicProfileResult;
    toDict(): {
        [key: string]: any;
    };
}
