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
var ReportRequest = /** @class */ (function () {
    function ReportRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.statusName = null;
        this.events = null;
        this.duplicationAvoider = null;
    }
    ReportRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReportRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReportRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReportRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReportRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReportRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReportRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReportRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReportRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReportRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReportRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReportRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReportRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    ReportRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ReportRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ReportRequest.prototype.getEvents = function () {
        return this.events;
    };
    ReportRequest.prototype.setEvents = function (events) {
        this.events = events;
        return this;
    };
    ReportRequest.prototype.withEvents = function (events) {
        this.events = events;
        return this;
    };
    ReportRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReportRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReportRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReportRequest.fromDict = function (data) {
        return new ReportRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStatusName(data["statusName"])
            .withEvents(data.events ?
            data.events.map(function (item) {
                return Gs2StateMachine.Event.fromDict(item);
            }) : []);
    };
    ReportRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "statusName": this.getStatusName(),
            "events": this.getEvents() ?
                this.getEvents().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ReportRequest;
}());
exports.default = ReportRequest;
//# sourceMappingURL=ReportRequest.js.map