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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:news:{namespaceName}:progress:{uploadToken}";

export default class Progress implements IModel {
    private progressId: string|null = null;
    private uploadToken: string|null = null;
    private generated: number|null = null;
    private patternCount: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{uploadToken}', '.*')
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
            .replace('{uploadToken}', '.*')
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
            .replace('{uploadToken}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUploadToken(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{uploadToken}', '(.*)')
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
        if (this.getUploadToken(grn) == null || this.getUploadToken(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        uploadToken: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{uploadToken}', uploadToken ?? '');
    }
    public getProgressId(): string|null {
        return this.progressId;
    }
    public setProgressId(progressId: string|null) {
        this.progressId = progressId;
        return this;
    }
    public withProgressId(progressId: string|null): this {
        this.progressId = progressId;
        return this;
    }
    public getUploadToken(): string|null {
        return this.uploadToken;
    }
    public setUploadToken(uploadToken: string|null) {
        this.uploadToken = uploadToken;
        return this;
    }
    public withUploadToken(uploadToken: string|null): this {
        this.uploadToken = uploadToken;
        return this;
    }
    public getGenerated(): number|null {
        return this.generated;
    }
    public setGenerated(generated: number|null) {
        this.generated = generated;
        return this;
    }
    public withGenerated(generated: number|null): this {
        this.generated = generated;
        return this;
    }
    public getPatternCount(): number|null {
        return this.patternCount;
    }
    public setPatternCount(patternCount: number|null) {
        this.patternCount = patternCount;
        return this;
    }
    public withPatternCount(patternCount: number|null): this {
        this.patternCount = patternCount;
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

    public static fromDict(data: {[key: string]: any}): Progress|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUploadToken(data["uploadToken"])
            .withGenerated(data["generated"])
            .withPatternCount(data["patternCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "progressId": this.getProgressId(),
            "uploadToken": this.getUploadToken(),
            "generated": this.getGenerated(),
            "patternCount": this.getPatternCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
