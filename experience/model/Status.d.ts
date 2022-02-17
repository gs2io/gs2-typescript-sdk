import IModel from '../../core/interface/IModel';
export default class Status implements IModel {
    private statusId;
    private experienceName;
    private userId;
    private propertyId;
    private experienceValue;
    private rankValue;
    private rankCapValue;
    private createdAt;
    private updatedAt;
    getStatusId(): string | null;
    setStatusId(statusId: string | null): this;
    withStatusId(statusId: string | null): this;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getExperienceValue(): number | null;
    setExperienceValue(experienceValue: number | null): this;
    withExperienceValue(experienceValue: number | null): this;
    getRankValue(): number | null;
    setRankValue(rankValue: number | null): this;
    withRankValue(rankValue: number | null): this;
    getRankCapValue(): number | null;
    setRankCapValue(rankCapValue: number | null): this;
    withRankCapValue(rankCapValue: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Status | null;
    toDict(): {
        [key: string]: any;
    };
}
