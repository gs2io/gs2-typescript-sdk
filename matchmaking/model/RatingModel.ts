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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:model:{ratingName}";

export default class RatingModel implements IModel {
    private ratingModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private volatility: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*')
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
        if (this.getRatingName(grn) == null || this.getRatingName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        ratingName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{ratingName}', ratingName ?? '');
    }

    public getRatingModelId(): string|null {
        return this.ratingModelId;
    }

    public setRatingModelId(ratingModelId: string|null) {
        this.ratingModelId = ratingModelId;
        return this;
    }

    public withRatingModelId(ratingModelId: string|null): this {
        this.ratingModelId = ratingModelId;
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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getVolatility(): number|null {
        return this.volatility;
    }

    public setVolatility(volatility: number|null) {
        this.volatility = volatility;
        return this;
    }

    public withVolatility(volatility: number|null): this {
        this.volatility = volatility;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RatingModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RatingModel()
            .withRatingModelId(data["ratingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withVolatility(data["volatility"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ratingModelId": this.getRatingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "volatility": this.getVolatility(),
        };
    }
}
