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
var UpdateMissionGroupModelMasterRequest = /** @class */ (function () {
    function UpdateMissionGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
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
    UpdateMissionGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getAnchorTimestamp = function () {
        return this.anchorTimestamp;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getDays = function () {
        return this.days;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setDays = function (days) {
        this.days = days;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withDays = function (days) {
        this.days = days;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.getCompleteNotificationNamespaceId = function () {
        return this.completeNotificationNamespaceId;
    };
    UpdateMissionGroupModelMasterRequest.prototype.setCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.prototype.withCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    UpdateMissionGroupModelMasterRequest.fromDict = function (data) {
        return new UpdateMissionGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
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
    UpdateMissionGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
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
    return UpdateMissionGroupModelMasterRequest;
}());
exports.default = UpdateMissionGroupModelMasterRequest;
//# sourceMappingURL=UpdateMissionGroupModelMasterRequest.js.map