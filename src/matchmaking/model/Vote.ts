/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';
import Ballot from './Ballot';
import GameResult from './GameResult';
import WrittenBallot from './WrittenBallot';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:vote:{ratingName}:{gatheringName}";

export default class Vote implements IModel {
    private voteId: string|null = null;
    private ratingName: string|null = null;
    private gatheringName: string|null = null;
    private writtenBallots: WrittenBallot[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*')
            .replace('{gatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*')
            .replace('{gatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{ratingName}', '.*')
            .replace('{gatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRatingName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '(.*)')
            .replace('{gatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGatheringName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*')
            .replace('{gatheringName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getRatingName(grn) == null) {
            return false;
        }
        if (this.getGatheringName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        ratingName: string|null,
        gatheringName: string|null,
    ): string|null {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (ratingName == null || ratingName === '') {
            return null;
        }
        if (gatheringName == null || gatheringName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region!)
            .replace('{ownerId}', ownerId!)
            .replace('{namespaceName}', namespaceName!)
            .replace('{ratingName}', ratingName!)
            .replace('{gatheringName}', gatheringName!);
    }

    public getVoteId(): string|null {
        return this.voteId;
    }

    public setVoteId(voteId: string|null) {
        this.voteId = voteId;
        return this;
    }

    public withVoteId(voteId: string|null): this {
        this.voteId = voteId;
        return this;
    }

    public getRatingName(): string|null {
        return this.ratingName;
    }

    public setRatingName(ratingName: string|null) {
        this.ratingName = ratingName;
        return this;
    }

    public withRatingName(ratingName: string|null): this {
        this.ratingName = ratingName;
        return this;
    }

    public getGatheringName(): string|null {
        return this.gatheringName;
    }

    public setGatheringName(gatheringName: string|null) {
        this.gatheringName = gatheringName;
        return this;
    }

    public withGatheringName(gatheringName: string|null): this {
        this.gatheringName = gatheringName;
        return this;
    }

    public getWrittenBallots(): WrittenBallot[]|null {
        return this.writtenBallots;
    }

    public setWrittenBallots(writtenBallots: WrittenBallot[]|null) {
        this.writtenBallots = writtenBallots;
        return this;
    }

    public withWrittenBallots(writtenBallots: WrittenBallot[]|null): this {
        this.writtenBallots = writtenBallots;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Vote|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Vote()
            .withVoteId(data["voteId"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withWrittenBallots(data.writtenBallots ?
                data.writtenBallots.map((item: {[key: string]: any}) => {
                    return WrittenBallot.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "voteId": this.getVoteId(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "writtenBallots": this.getWrittenBallots() ?
                this.getWrittenBallots()!.map((item: WrittenBallot) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
