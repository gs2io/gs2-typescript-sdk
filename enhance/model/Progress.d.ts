import IModel from '../../core/interface/IModel';
export default class Progress implements IModel {
    private progressId;
    private userId;
    private rateName;
    private propertyId;
    private experienceValue;
    private rate;
    private createdAt;
    private updatedAt;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getProgressId(): string | null;
    setProgressId(progressId: string | null): this;
    withProgressId(progressId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getExperienceValue(): number | null;
    setExperienceValue(experienceValue: number | null): this;
    withExperienceValue(experienceValue: number | null): this;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Progress | null;
    toDict(): {
        [key: string]: any;
    };
}
