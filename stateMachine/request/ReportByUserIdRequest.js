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
var tslib_1 = require("tslib");
var Gs2StateMachine = tslib_1.__importStar(require("../model"));
var ReportByUserIdRequest = /** @class */ (function () {
    function ReportByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.statusName = null;
        this.events = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ReportByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReportByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReportByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReportByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReportByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReportByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReportByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReportByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReportByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReportByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReportByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReportByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReportByUserIdRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    ReportByUserIdRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ReportByUserIdRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ReportByUserIdRequest.prototype.getEvents = function () {
        return this.events;
    };
    ReportByUserIdRequest.prototype.setEvents = function (events) {
        this.events = events;
        return this;
    };
    ReportByUserIdRequest.prototype.withEvents = function (events) {
        this.events = events;
        return this;
    };
    ReportByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ReportByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReportByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReportByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReportByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReportByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReportByUserIdRequest.fromDict = function (data) {
        return new ReportByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStatusName(data["statusName"])
            .withEvents(data.events ?
            data.events.map(function (item) {
                return Gs2StateMachine.Event.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ReportByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "statusName": this.getStatusName(),
            "events": this.getEvents() ?
                this.getEvents().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ReportByUserIdRequest;
}());
exports.default = ReportByUserIdRequest;
//# sourceMappingURL=ReportByUserIdRequest.js.map