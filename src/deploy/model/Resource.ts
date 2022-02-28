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
import OutputField from './OutputField';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:deploy:{stackName}:resource:{resourceName}";

export default class Resource implements IModel {
    private resourceId: string|null = null;
    private type: string|null = null;
    private name: string|null = null;
    private request: string|null = null;
    private response: string|null = null;
    private rollbackContext: string|null = null;
    private rollbackRequest: string|null = null;
    private rollbackAfter: string[]|null = null;
    private outputFields: OutputField[]|null = null;
    private workId: string|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '.*')
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
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStackName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)')
            .replace('{resourceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getResourceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '(.*)')
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
        if (this.getStackName(grn) == null) {
            return false;
        }
        if (this.getResourceName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        stackName: string|null,
        resourceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{stackName}', stackName ?? '')
            .replace('{resourceName}', resourceName ?? '');
    }

    public getResourceId(): string|null {
        return this.resourceId;
    }

    public setResourceId(resourceId: string|null) {
        this.resourceId = resourceId;
        return this;
    }

    public withResourceId(resourceId: string|null): this {
        this.resourceId = resourceId;
        return this;
    }

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
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

    public getRequest(): string|null {
        return this.request;
    }

    public setRequest(request: string|null) {
        this.request = request;
        return this;
    }

    public withRequest(request: string|null): this {
        this.request = request;
        return this;
    }

    public getResponse(): string|null {
        return this.response;
    }

    public setResponse(response: string|null) {
        this.response = response;
        return this;
    }

    public withResponse(response: string|null): this {
        this.response = response;
        return this;
    }

    public getRollbackContext(): string|null {
        return this.rollbackContext;
    }

    public setRollbackContext(rollbackContext: string|null) {
        this.rollbackContext = rollbackContext;
        return this;
    }

    public withRollbackContext(rollbackContext: string|null): this {
        this.rollbackContext = rollbackContext;
        return this;
    }

    public getRollbackRequest(): string|null {
        return this.rollbackRequest;
    }

    public setRollbackRequest(rollbackRequest: string|null) {
        this.rollbackRequest = rollbackRequest;
        return this;
    }

    public withRollbackRequest(rollbackRequest: string|null): this {
        this.rollbackRequest = rollbackRequest;
        return this;
    }

    public getRollbackAfter(): string[]|null {
        return this.rollbackAfter;
    }

    public setRollbackAfter(rollbackAfter: string[]|null) {
        this.rollbackAfter = rollbackAfter;
        return this;
    }

    public withRollbackAfter(rollbackAfter: string[]|null): this {
        this.rollbackAfter = rollbackAfter;
        return this;
    }

    public getOutputFields(): OutputField[]|null {
        return this.outputFields;
    }

    public setOutputFields(outputFields: OutputField[]|null) {
        this.outputFields = outputFields;
        return this;
    }

    public withOutputFields(outputFields: OutputField[]|null): this {
        this.outputFields = outputFields;
        return this;
    }

    public getWorkId(): string|null {
        return this.workId;
    }

    public setWorkId(workId: string|null) {
        this.workId = workId;
        return this;
    }

    public withWorkId(workId: string|null): this {
        this.workId = workId;
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

    public static fromDict(data: {[key: string]: any}): Resource|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Resource()
            .withResourceId(data["resourceId"])
            .withType(data["type"])
            .withName(data["name"])
            .withRequest(data["request"])
            .withResponse(data["response"])
            .withRollbackContext(data["rollbackContext"])
            .withRollbackRequest(data["rollbackRequest"])
            .withRollbackAfter(data.rollbackAfter ?
                data.rollbackAfter.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withOutputFields(data.outputFields ?
                data.outputFields.map((item: {[key: string]: any}) => {
                    return OutputField.fromDict(item);
                }
            ) : [])
            .withWorkId(data["workId"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "resourceId": this.getResourceId(),
            "type": this.getType(),
            "name": this.getName(),
            "request": this.getRequest(),
            "response": this.getResponse(),
            "rollbackContext": this.getRollbackContext(),
            "rollbackRequest": this.getRollbackRequest(),
            "rollbackAfter": this.getRollbackAfter() ?
                this.getRollbackAfter()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "outputFields": this.getOutputFields() ?
                this.getOutputFields()!.map((item: OutputField) => {
                    return item.toDict();
                }
            ) : [],
            "workId": this.getWorkId(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
