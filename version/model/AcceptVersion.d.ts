import IModel from '../../core/interface/IModel';
import Version from './Version';
export default class AcceptVersion implements IModel {
    private acceptVersionId;
    private versionName;
    private userId;
    private version;
    private createdAt;
    private updatedAt;
    getAcceptVersionId(): string | null;
    setAcceptVersionId(acceptVersionId: string | null): this;
    withAcceptVersionId(acceptVersionId: string | null): this;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getVersion(): Version | null;
    setVersion(version: Version | null): this;
    withVersion(version: Version | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcceptVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
