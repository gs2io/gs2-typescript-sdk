import IModel from '../../core/interface/IModel';
import * as Gs2Version from '../../version/model';
export default class AcceptVersion implements IModel {
    private acceptVersionId;
    private versionName;
    private userId;
    private version;
    private status;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getVersionName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, versionName: string | null): string | null;
    getAcceptVersionId(): string | null;
    setAcceptVersionId(acceptVersionId: string | null): this;
    withAcceptVersionId(acceptVersionId: string | null): this;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getVersion(): Gs2Version.Version | null;
    setVersion(version: Gs2Version.Version | null): this;
    withVersion(version: Gs2Version.Version | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcceptVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
