export const userFilters = [
    "email",
    "product",
    "lastActive",
    "signedUp",
    "subscription",
    "tag",
    "permission",
] as const;
export const userFilterAggregationOperators = ["and", "or"] as const;
export const mailTypes = ["broadcast", "sequence"] as const;
export const eventTypes = [
    "tag:added",
    "tag:removed",
    "product:purchased",
    "subscriber:added",
    "date:occurred",
] as const;
export const actionTypes = [
    "tag:add",
    "tag:remove",
    "seq:start",
    "seq:remove",
    "date:delay",
] as const;
export const emailActionTypes = ["tag:add", "tag:remove"] as const;
export const sequenceStatus = [
    "draft",
    "active",
    "paused",
    "completed",
] as const;
