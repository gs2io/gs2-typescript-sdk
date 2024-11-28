import IModel from '../../core/interface/IModel';
import * as Gs2Version from '../../version/model';
export default class Status implements IModel {
    private versionModel;
    private currentVersion;
    getVersionModel(): Gs2Version.VersionModel | null;
    setVersionModel(versionModel: Gs2Version.VersionModel | null): this;
    withVersionModel(versionModel: Gs2Version.VersionModel | null): this;
    getCurrentVersion(): Gs2Version.Version | null;
    setCurrentVersion(currentVersion: Gs2Version.Version | null): this;
    withCurrentVersion(currentVersion: Gs2Version.Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Status | null;
    toDict(): {
        [key: string]: any;
    };
}
