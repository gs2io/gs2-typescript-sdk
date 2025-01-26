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
var CreateMissionGroupModelMasterRequest = /** @class */ (function () {
    function CreateMissionGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.anchorTimestamp = null;
        this.days = null;
        this.completeNotificationNamespaceId = null;
    }
    CreateMissionGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateMissionGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateMissionGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateMissionGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateMissionGroupModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateMissionGroupModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateMissionGroupModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    CreateMissionGroupModelMasterRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    CreateMissionGroupModelMasterRequest.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    CreateMissionGroupModelMasterRequest.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    CreateMissionGroupModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getAnchorTimestamp = function () {
        return this.anchorTimestamp;
    };
    CreateMissionGroupModelMasterRequest.prototype.setAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getDays = function () {
        return this.days;
    };
    CreateMissionGroupModelMasterRequest.prototype.setDays = function (days) {
        this.days = days;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withDays = function (days) {
        this.days = days;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.getCompleteNotificationNamespaceId = function () {
        return this.completeNotificationNamespaceId;
    };
    CreateMissionGroupModelMasterRequest.prototype.setCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    CreateMissionGroupModelMasterRequest.prototype.withCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    CreateMissionGroupModelMasterRequest.fromDict = function (data) {
        return new CreateMissionGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"])
            .withCompleteNotificationNamespaceId(data["completeNotificationNamespaceId"]);
    };
    CreateMissionGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
            "completeNotificationNamespaceId": this.getCompleteNotificationNamespaceId(),
        };
    };
    return CreateMissionGroupModelMasterRequest;
}());
exports.default = CreateMissionGroupModelMasterRequest;
//# sourceMappingURL=CreateMissionGroupModelMasterRequest.js.map