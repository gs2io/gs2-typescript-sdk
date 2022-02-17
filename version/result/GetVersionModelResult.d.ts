import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class GetVersionModelResult implements IResult {
    private item;
    getItem(): Gs2Version.VersionModel | null;
    setItem(item: Gs2Version.VersionModel | null): this;
    withItem(item: Gs2Version.VersionModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetVersionModelResult;
    toDict(): {
        [key: string]: any;
    };
}
