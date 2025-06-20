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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Project from '../model'

export default class WaitActivateRegionRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private ownerId: string|null = null;
    private projectName: string|null = null;
    private regionName: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getOwnerId(): string|null {
        return this.ownerId;
    }
    public setOwnerId(ownerId: string|null) {
        this.ownerId = ownerId;
        return this;
    }
    public withOwnerId(ownerId: string|null): this {
        this.ownerId = ownerId;
        return this;
    }
    public getProjectName(): string|null {
        return this.projectName;
    }
    public setProjectName(projectName: string|null) {
        this.projectName = projectName;
        return this;
    }
    public withProjectName(projectName: string|null): this {
        this.projectName = projectName;
        return this;
    }
    public getRegionName(): string|null {
        return this.regionName;
    }
    public setRegionName(regionName: string|null) {
        this.regionName = regionName;
        return this;
    }
    public withRegionName(regionName: string|null): this {
        this.regionName = regionName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): WaitActivateRegionRequest {
        return new WaitActivateRegionRequest()
            .withOwnerId(data["ownerId"])
            .withProjectName(data["projectName"])
            .withRegionName(data["regionName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ownerId": this.getOwnerId(),
            "projectName": this.getProjectName(),
            "regionName": this.getRegionName(),
        };
    }
}