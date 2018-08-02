'use strict';

const CampaignSource = {
    MIN: 1,

    TEMPLATE: 1,
    CUSTOM: 2,
    CUSTOM_FROM_TEMPLATE: 3,
    CUSTOM_FROM_CAMPAIGN: 4,
    URL: 5,
    RSS: 6,

    MAX: 6
};

const CampaignType = {
    MIN: 1,

    REGULAR: 1,
    RSS: 2,
    RSS_ENTRY: 3,
    TRIGGERED: 4,

    MAX: 4
};

const CampaignStatus = {
    MIN: 1,

    // For campaign types: NORMAL, RSS_ENTRY
    IDLE: 1,
    SCHEDULED: 2,
    FINISHED: 3,
    PAUSED: 4,

    // For campaign types: RSS, TRIGGERED
    INACTIVE: 5,
    ACTIVE: 6,

    MAA: 6
};


module.exports = {
    CampaignSource,
    CampaignType,
    CampaignStatus
};