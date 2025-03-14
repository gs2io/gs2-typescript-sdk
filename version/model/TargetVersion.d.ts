import IModel from '../../core/interface/IModel';
import * as Gs2Version from '../../version/model';
export default class TargetVersion implements IModel {
    private versionName;
    private body;
    private signature;
    private version;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    getVersion(): Gs2Version.Version | null;
    setVersion(version: Gs2Version.Version | null): this;
    withVersion(version: Gs2Version.Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TargetVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
