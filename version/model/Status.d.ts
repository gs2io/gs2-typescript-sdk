import IModel from '../../core/interface/IModel';
import Version from './Version';
import VersionModel from './VersionModel';
export default class Status implements IModel {
    private versionModel;
    private currentVersion;
    getVersionModel(): VersionModel | null;
    setVersionModel(versionModel: VersionModel | null): this;
    withVersionModel(versionModel: VersionModel | null): this;
    getCurrentVersion(): Version | null;
    setCurrentVersion(currentVersion: Version | null): this;
    withCurrentVersion(currentVersion: Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Status | null;
    toDict(): {
        [key: string]: any;
    };
}
