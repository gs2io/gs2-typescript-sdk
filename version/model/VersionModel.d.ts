import IModel from '../../core/interface/IModel';
import Version from './Version';
export default class VersionModel implements IModel {
    private versionModelId;
    private name;
    private metadata;
    private warningVersion;
    private errorVersion;
    private scope;
    private currentVersion;
    private needSignature;
    private signatureKeyId;
    getVersionModelId(): string | null;
    setVersionModelId(versionModelId: string | null): this;
    withVersionModelId(versionModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getWarningVersion(): Version | null;
    setWarningVersion(warningVersion: Version | null): this;
    withWarningVersion(warningVersion: Version | null): this;
    getErrorVersion(): Version | null;
    setErrorVersion(errorVersion: Version | null): this;
    withErrorVersion(errorVersion: Version | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getCurrentVersion(): Version | null;
    setCurrentVersion(currentVersion: Version | null): this;
    withCurrentVersion(currentVersion: Version | null): this;
    getNeedSignature(): boolean | null;
    setNeedSignature(needSignature: boolean | null): this;
    withNeedSignature(needSignature: boolean | null): this;
    getSignatureKeyId(): string | null;
    setSignatureKeyId(signatureKeyId: string | null): this;
    withSignatureKeyId(signatureKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VersionModel | null;
    toDict(): {
        [key: string]: any;
    };
}
