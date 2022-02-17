import IModel from '../../core/interface/IModel';
import Version from './Version';
export default class SignTargetVersion implements IModel {
    private region;
    private namespaceName;
    private versionName;
    private version;
    getRegion(): string | null;
    setRegion(region: string | null): this;
    withRegion(region: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getVersion(): Version | null;
    setVersion(version: Version | null): this;
    withVersion(version: Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SignTargetVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
