export type RouteScope = keyof typeof ApiRoutes;

export const ApiRoutes = {
  "Search Routes": [
    "POST /api/chunk/search",
    "POST /api/chunk_group/search",
    "POST /api/chunk/autocomplete",
  ],
  "Query Suggestions": ["POST /api/chunk/suggestions"],
  "Count Chunks Above Threshold": ["POST /api/chunk/count"],
  "Send Event Data": [
    "PUT /api/analytics/ctr",
    "PUT /api/analytics/search",
    "PUT /api/analytics/events",
  ],
  "api/analytics/*": [
    "POST /api/analytics/rag",
    "POST /api/analytics/recommendations",
    "POST /api/analytics/search",
    "POST /api/analytics/search/cluster",
  ],
  "api/auth/*": [
    "GET /api/auth",
    "DELETE /api/auth",
    "GET /api/auth/callback",
    "GET /api/auth/me",
  ],
  "api/chunk/*": [
    "POST /api/chunk",
    "PUT /api/chunk",
    "POST /api/chunk/autocomplete",
    "POST /api/chunk/count",
    "POST /api/chunk/suggestions",
    "POST /api/chunk/generate",
    "POST /api/chunk/recommend",
    "POST /api/chunk/search",
    "PUT /api/chunk/tracking_id/update",
    "GET /api/chunk/tracking_id/{tracking_id}",
    "DELETE /api/chunk/tracking_id/{tracking_id}",
    "GET /api/chunk/{chunk_id}",
    "DELETE /api/chunk/{chunk_id}",
  ],
  "api/chunk_group/*": [
    "POST /api/chunk_group",
    "PUT /api/chunk_group",
    "POST /api/chunk_group/chunk/{group_id}",
    "DELETE /api/chunk_group/chunk/{group_id}",
    "POST /api/chunk_group/chunks",
    "POST /api/chunk_group/group_oriented_search",
    "POST /api/chunk_group/recommend",
    "POST /api/chunk_group/search",
    "GET /api/chunk_group/tracking_id/{group_tracking_id}/{page}",
    "GET /api/chunk_group/tracking_id/{tracking_id}",
    "POST /api/chunk_group/tracking_id/{tracking_id}",
    "PUT /api/chunk_group/tracking_id/{tracking_id}",
    "DELETE /api/chunk_group/tracking_id/{tracking_id}",
    "GET /api/chunk_group/{group_id}",
    "DELETE /api/chunk_group/{group_id}",
    "GET /api/chunk_group/{group_id}/{page}",
  ],
  "api/chunks/*": ["POST /api/chunks", "POST /api/chunks/tracking"],
  "api/dataset/*": [
    "POST /api/dataset",
    "PUT /api/dataset",
    "PUT /api/dataset/clear/{dataset_id}",
    "GET /api/dataset/files/{dataset_id}/{page}",
    "GET /api/dataset/groups/{dataset_id}/{page}",
    "GET /api/dataset/organization/{organization_id}",
    "DELETE /api/dataset/tracking_id/{tracking_id}",
    "GET /api/dataset/usage/{dataset_id}",
    "GET /api/dataset/{dataset_id}",
    "DELETE /api/dataset/{dataset_id}",
  ],
  "api/events/*": ["POST /api/events"],
  "api/file/*": [
    "POST /api/file",
    "GET /api/file/{file_id}",
    "DELETE /api/file/{file_id}",
  ],
  "api/health/*": ["GET /api/health"],
  "api/invitation/*": ["POST /api/invitation"],
  "api/message/*": [
    "POST /api/message",
    "PUT /api/message",
    "DELETE /api/message",
    "PATCH /api/message",
  ],
  "api/messages/*": ["GET /api/messages/{messages_topic_id}"],
  "api/organization/*": [
    "POST /api/organization",
    "PUT /api/organization",
    "POST /api/organization/update_dataset_configs",
    "GET /api/organization/usage/{organization_id}",
    "GET /api/organization/users/{organization_id}",
    "GET /api/organization/{organization_id}",
    "DELETE /api/organization/{organization_id}",
  ],
  "api/stripe/*": [
    "POST /api/stripe/checkout/setup/{organization_id}",
    "GET /api/stripe/invoices/{organization_id}",
    "GET /api/stripe/payment_link/{plan_id}/{organization_id}",
    "GET /api/stripe/plans",
    "DELETE /api/stripe/subscription/{subscription_id}",
    "PATCH /api/stripe/subscription_plan/{subscription_id}/{plan_id}",
  ],
  "api/topic/*": [
    "POST /api/topic",
    "PUT /api/topic",
    "GET /api/topic/owner/{owner_id}",
    "DELETE /api/topic/{topic_id}",
  ],
  "api/user/*": [
    "PUT /api/user",
    "POST /api/user/api_key",
    "DELETE /api/user/api_key/{api_key_id}",
  ],
};
