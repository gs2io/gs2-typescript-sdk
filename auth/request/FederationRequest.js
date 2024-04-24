"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var FederationRequest = /** @class */ (function () {
    function FederationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.originalUserId = null;
        this.userId = null;
        this.policyDocument = null;
        this.timeOffset = null;
        this.timeOffsetToken = null;
    }
    FederationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FederationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FederationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FederationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FederationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FederationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FederationRequest.prototype.getOriginalUserId = function () {
        return this.originalUserId;
    };
    FederationRequest.prototype.setOriginalUserId = function (originalUserId) {
        this.originalUserId = originalUserId;
        return this;
    };
    FederationRequest.prototype.withOriginalUserId = function (originalUserId) {
        this.originalUserId = originalUserId;
        return this;
    };
    FederationRequest.prototype.getUserId = function () {
        return this.userId;
    };
    FederationRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FederationRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FederationRequest.prototype.getPolicyDocument = function () {
        return this.policyDocument;
    };
    FederationRequest.prototype.setPolicyDocument = function (policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    };
    FederationRequest.prototype.withPolicyDocument = function (policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    };
    FederationRequest.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    FederationRequest.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    FederationRequest.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    FederationRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    FederationRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    FederationRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    FederationRequest.fromDict = function (data) {
        return new FederationRequest()
            .withOriginalUserId(data["originalUserId"])
            .withUserId(data["userId"])
            .withPolicyDocument(data["policyDocument"])
            .withTimeOffset(data["timeOffset"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    FederationRequest.prototype.toDict = function () {
        return {
            "originalUserId": this.getOriginalUserId(),
            "userId": this.getUserId(),
            "policyDocument": this.getPolicyDocument(),
            "timeOffset": this.getTimeOffset(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return FederationRequest;
}());
exports.default = FederationRequest;
//# sourceMappingURL=FederationRequest.js.map