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

import * as Gs2Grade from '../model'

export default class SetGradeByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private gradeName: string|null = null;
    private propertyId: string|null = null;
    private gradeValue: number|null = null;
    private duplicationAvoider: string|null = null;

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
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
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
    public getGradeName(): string|null {
        return this.gradeName;
    }
    public setGradeName(gradeName: string|null) {
        this.gradeName = gradeName;
        return this;
    }
    public withGradeName(gradeName: string|null): this {
        this.gradeName = gradeName;
        return this;
    }
    public getPropertyId(): string|null {
        return this.propertyId;
    }
    public setPropertyId(propertyId: string|null) {
        this.propertyId = propertyId;
        return this;
    }
    public withPropertyId(propertyId: string|null): this {
        this.propertyId = propertyId;
        return this;
    }
    public getGradeValue(): number|null {
        return this.gradeValue;
    }
    public setGradeValue(gradeValue: number|null) {
        this.gradeValue = gradeValue;
        return this;
    }
    public withGradeValue(gradeValue: number|null): this {
        this.gradeValue = gradeValue;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetGradeByUserIdRequest {
        return new SetGradeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
        };
    }
}