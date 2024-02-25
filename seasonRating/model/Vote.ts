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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:seasonRating:{namespaceName}:vote:{seasonName}:{sessionName}";

export default class Vote implements IModel {
    private voteId: string|null = null;
    private seasonName: string|null = null;
    private sessionName: string|null = null;
    private writtenBallots: WrittenBallot[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*')
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
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*')
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
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSeasonName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)')
            .replace('{sessionName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSessionName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSeasonName(grn) == null || this.getSeasonName(grn) === '') {
            return false;
        }
        if (this.getSessionName(grn) == null || this.getSessionName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        seasonName: string|null,
        sessionName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{seasonName}', seasonName ?? '')
            .replace('{sessionName}', sessionName ?? '');
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
    public getSeasonName(): string|null {
        return this.seasonName;
    }
    public setSeasonName(seasonName: string|null) {
        this.seasonName = seasonName;
        return this;
    }
    public withSeasonName(seasonName: string|null): this {
        this.seasonName = seasonName;
        return this;
    }
    public getSessionName(): string|null {
        return this.sessionName;
    }
    public setSessionName(sessionName: string|null) {
        this.sessionName = sessionName;
        return this;
    }
    public withSessionName(sessionName: string|null): this {
        this.sessionName = sessionName;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Vote|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Vote()
            .withVoteId(data["voteId"])
            .withSeasonName(data["seasonName"])
            .withSessionName(data["sessionName"])
            .withWrittenBallots(data.writtenBallots ?
                data.writtenBallots.map((item: {[key: string]: any}) => {
                    return WrittenBallot.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "voteId": this.getVoteId(),
            "seasonName": this.getSeasonName(),
            "sessionName": this.getSessionName(),
            "writtenBallots": this.getWrittenBallots() ?
                this.getWrittenBallots()!.map((item: WrittenBallot) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
