import IModel from '../../core/interface/IModel';
import * as Gs2Account from '../../account/model';
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
    getOpenIdConnectSetting(): Gs2Account.OpenIdConnectSetting | null;
    setOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting | null): this;
    withOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TakeOverTypeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
