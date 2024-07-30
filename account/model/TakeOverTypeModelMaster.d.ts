import IModel from '../../core/interface/IModel';
import OpenIdConnectSetting from './OpenIdConnectSetting';
export default class TakeOverTypeModelMaster implements IModel {
    private takeOverTypeModelId;
    private type;
    private description;
    private metadata;
    private openIdConnectSetting;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getType(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, type: string | null): string | null;
    getTakeOverTypeModelId(): string | null;
    setTakeOverTypeModelId(takeOverTypeModelId: string | null): this;
    withTakeOverTypeModelId(takeOverTypeModelId: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getOpenIdConnectSetting(): OpenIdConnectSetting | null;
    setOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting | null): this;
    withOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting | null): this;
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
    }): TakeOverTypeModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
