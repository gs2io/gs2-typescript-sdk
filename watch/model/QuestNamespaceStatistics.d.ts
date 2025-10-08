import IModel from '../../core/interface/IModel';
export default class QuestNamespaceStatistics implements IModel {
    private startQuest;
    private endQuest;
    private successful;
    private successfulRate;
    getStartQuest(): number | null;
    setStartQuest(startQuest: number | null): this;
    withStartQuest(startQuest: number | null): this;
    getEndQuest(): number | null;
    setEndQuest(endQuest: number | null): this;
    withEndQuest(endQuest: number | null): this;
    getSuccessful(): number | null;
    setSuccessful(successful: number | null): this;
    withSuccessful(successful: number | null): this;
    getSuccessfulRate(): number | null;
    setSuccessfulRate(successfulRate: number | null): this;
    withSuccessfulRate(successfulRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
