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

import * as Gs2Exchange from '../../exchange/model'
import Config from './Config';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:user:{userId}:await:{awaitName}";

export default class Await implements IModel {
    private awaitId: string|null = null;
    private userId: string|null = null;
    private rateName: string|null = null;
    private name: string|null = null;
    private count: number|null = null;
    private skipSeconds: number|null = null;
    private config: Gs2Exchange.Config[]|null = null;
    private acquirableAt: number|null = null;
    private exchangedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{awaitName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getAwaitName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getAwaitName(grn) == null || this.getAwaitName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        awaitName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{awaitName}', awaitName ?? '');
    }
    public getAwaitId(): string|null {
        return this.awaitId;
    }
    public setAwaitId(awaitId: string|null) {
        this.awaitId = awaitId;
        return this;
    }
    public withAwaitId(awaitId: string|null): this {
        this.awaitId = awaitId;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getRateName(): string|null {
        return this.rateName;
    }
    public setRateName(rateName: string|null) {
        this.rateName = rateName;
        return this;
    }
    public withRateName(rateName: string|null): this {
        this.rateName = rateName;
        return this;
    }
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }
    public getSkipSeconds(): number|null {
        return this.skipSeconds;
    }
    public setSkipSeconds(skipSeconds: number|null) {
        this.skipSeconds = skipSeconds;
        return this;
    }
    public withSkipSeconds(skipSeconds: number|null): this {
        this.skipSeconds = skipSeconds;
        return this;
    }
    public getConfig(): Gs2Exchange.Config[]|null {
        return this.config;
    }
    public setConfig(config: Gs2Exchange.Config[]|null) {
        this.config = config;
        return this;
    }
    public withConfig(config: Gs2Exchange.Config[]|null): this {
        this.config = config;
        return this;
    }
    public getAcquirableAt(): number|null {
        return this.acquirableAt;
    }
    public setAcquirableAt(acquirableAt: number|null) {
        this.acquirableAt = acquirableAt;
        return this;
    }
    public withAcquirableAt(acquirableAt: number|null): this {
        this.acquirableAt = acquirableAt;
        return this;
    }
    public getExchangedAt(): number|null {
        return this.exchangedAt;
    }
    public setExchangedAt(exchangedAt: number|null) {
        this.exchangedAt = exchangedAt;
        return this;
    }
    public withExchangedAt(exchangedAt: number|null): this {
        this.exchangedAt = exchangedAt;
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

    public static fromDict(data: {[key: string]: any}): Await|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Await()
            .withAwaitId(data["awaitId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withName(data["name"])
            .withCount(data["count"])
            .withSkipSeconds(data["skipSeconds"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Exchange.Config.fromDict(item);
                }
            ) : null)
            .withAcquirableAt(data["acquirableAt"])
            .withExchangedAt(data["exchangedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "awaitId": this.getAwaitId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "name": this.getName(),
            "count": this.getCount(),
            "skipSeconds": this.getSkipSeconds(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Exchange.Config) => {
                    return item.toDict();
                }
            ) : null,
            "acquirableAt": this.getAcquirableAt(),
            "exchangedAt": this.getExchangedAt(),
            "revision": this.getRevision(),
        };
    }
}
