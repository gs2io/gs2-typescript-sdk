import IModel from '../../core/interface/IModel';
import RarityParameterValue from './RarityParameterValue';
export default class RarityParameterStatus implements IModel {
    private rarityParameterStatusId;
    private userId;
    private parameterName;
    private propertyId;
    private parameterValues;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getParameterName(grn: string): string | null;
    static getPropertyId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, parameterName: string | null, propertyId: string | null): string | null;
    getRarityParameterStatusId(): string | null;
    setRarityParameterStatusId(rarityParameterStatusId: string | null): this;
    withRarityParameterStatusId(rarityParameterStatusId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getParameterName(): string | null;
    setParameterName(parameterName: string | null): this;
    withParameterName(parameterName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getParameterValues(): RarityParameterValue[] | null;
    setParameterValues(parameterValues: RarityParameterValue[] | null): this;
    withParameterValues(parameterValues: RarityParameterValue[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RarityParameterStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
