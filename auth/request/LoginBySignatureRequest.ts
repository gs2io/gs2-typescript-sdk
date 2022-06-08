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

import * as Gs2Auth from '../model'

export default class LoginBySignatureRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private keyId: string|null = null;
    private body: string|null = null;
    private signature: string|null = null;

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
    public getKeyId(): string|null {
        return this.keyId;
    }
    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }
    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }
    public getBody(): string|null {
        return this.body;
    }
    public setBody(body: string|null) {
        this.body = body;
        return this;
    }
    public withBody(body: string|null): this {
        this.body = body;
        return this;
    }
    public getSignature(): string|null {
        return this.signature;
    }
    public setSignature(signature: string|null) {
        this.signature = signature;
        return this;
    }
    public withSignature(signature: string|null): this {
        this.signature = signature;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LoginBySignatureRequest {
        return new LoginBySignatureRequest()
            .withKeyId(data["keyId"])
            .withBody(data["body"])
            .withSignature(data["signature"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "keyId": this.getKeyId(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    }
}