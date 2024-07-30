import IModel from '../../core/interface/IModel';
import OpenIdConnectSetting from './OpenIdConnectSetting';
export default class TakeOverTypeModel implements IModel {
    private takeOverTypeModelId;
    private type;
    private metadata;
    private openIdConnectSetting;
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
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getOpenIdConnectSetting(): OpenIdConnectSetting | null;
    setOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting | null): this;
    withOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TakeOverTypeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
