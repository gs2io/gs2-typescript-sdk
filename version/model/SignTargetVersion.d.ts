import IModel from '../../core/interface/IModel';
import * as Gs2Version from '../../version/model';
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
    getVersion(): Gs2Version.Version | null;
    setVersion(version: Gs2Version.Version | null): this;
    withVersion(version: Gs2Version.Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SignTargetVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
