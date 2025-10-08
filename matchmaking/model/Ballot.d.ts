import IModel from '../../core/interface/IModel';
export default class Ballot implements IModel {
    private userId;
    private ratingName;
    private gatheringName;
    private numberOfPlayer;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRatingName(): string | null;
    setRatingName(ratingName: string | null): this;
    withRatingName(ratingName: string | null): this;
    getGatheringName(): string | null;
    setGatheringName(gatheringName: string | null): this;
    withGatheringName(gatheringName: string | null): this;
    getNumberOfPlayer(): number | null;
    setNumberOfPlayer(numberOfPlayer: number | null): this;
    withNumberOfPlayer(numberOfPlayer: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Ballot | null;
    toDict(): {
        [key: string]: any;
    };
}
