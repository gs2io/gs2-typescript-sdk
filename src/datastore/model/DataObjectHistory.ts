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

export default class DataObjectHistory implements IModel {
    private dataObjectHistoryId: string|null = null;
    private dataObjectName: string|null = null;
    private generation: string|null = null;
    private contentLength: number|null = null;
    private createdAt: number|null = null;

    public getDataObjectHistoryId(): string|null {
        return this.dataObjectHistoryId;
    }

    public setDataObjectHistoryId(dataObjectHistoryId: string|null) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    }

    public withDataObjectHistoryId(dataObjectHistoryId: string|null): this {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    }

    public getDataObjectName(): string|null {
        return this.dataObjectName;
    }

    public setDataObjectName(dataObjectName: string|null) {
        this.dataObjectName = dataObjectName;
        return this;
    }

    public withDataObjectName(dataObjectName: string|null): this {
        this.dataObjectName = dataObjectName;
        return this;
    }

    public getGeneration(): string|null {
        return this.generation;
    }

    public setGeneration(generation: string|null) {
        this.generation = generation;
        return this;
    }

    public withGeneration(generation: string|null): this {
        this.generation = generation;
        return this;
    }

    public getContentLength(): number|null {
        return this.contentLength;
    }

    public setContentLength(contentLength: number|null) {
        this.contentLength = contentLength;
        return this;
    }

    public withContentLength(contentLength: number|null): this {
        this.contentLength = contentLength;
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

    public static fromDict(data: {[key: string]: any}): DataObjectHistory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObjectHistory()
            .withDataObjectHistoryId(data["dataObjectHistoryId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"])
            .withContentLength(data["contentLength"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dataObjectHistoryId": this.getDataObjectHistoryId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
            "contentLength": this.getContentLength(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
