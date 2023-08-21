import IModel from '../../core/interface/IModel';
import WrittenBallot from './WrittenBallot';
export default class Vote implements IModel {
    private voteId;
    private ratingName;
    private gatheringName;
    private writtenBallots;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRatingName(grn: string): string | null;
    static getGatheringName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, ratingName: string | null, gatheringName: string | null): string | null;
    getVoteId(): string | null;
    setVoteId(voteId: string | null): this;
    withVoteId(voteId: string | null): this;
    getRatingName(): string | null;
    setRatingName(ratingName: string | null): this;
    withRatingName(ratingName: string | null): this;
    getGatheringName(): string | null;
    setGatheringName(gatheringName: string | null): this;
    withGatheringName(gatheringName: string | null): this;
    getWrittenBallots(): WrittenBallot[] | null;
    setWrittenBallots(writtenBallots: WrittenBallot[] | null): this;
    withWrittenBallots(writtenBallots: WrittenBallot[] | null): this;
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
    }): Vote | null;
    toDict(): {
        [key: string]: any;
    };
}
