import IModel from '../../core/interface/IModel';
export default class CompletedQuestList implements IModel {
    private completedQuestListId;
    private userId;
    private questGroupName;
    private completeQuestNames;
    private createdAt;
    private updatedAt;
    getCompletedQuestListId(): string | null;
    setCompletedQuestListId(completedQuestListId: string | null): this;
    withCompletedQuestListId(completedQuestListId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getQuestGroupName(): string | null;
    setQuestGroupName(questGroupName: string | null): this;
    withQuestGroupName(questGroupName: string | null): this;
    getCompleteQuestNames(): string[] | null;
    setCompleteQuestNames(completeQuestNames: string[] | null): this;
    withCompleteQuestNames(completeQuestNames: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CompletedQuestList | null;
    toDict(): {
        [key: string]: any;
    };
}
