import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class UpdateVersionModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Version.VersionModelMaster | null;
    setItem(item: Gs2Version.VersionModelMaster | null): this;
    withItem(item: Gs2Version.VersionModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateVersionModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
