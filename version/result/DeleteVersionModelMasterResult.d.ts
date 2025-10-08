import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class DeleteVersionModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Version.VersionModelMaster | null;
    setItem(item: Gs2Version.VersionModelMaster | null): this;
    withItem(item: Gs2Version.VersionModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteVersionModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
