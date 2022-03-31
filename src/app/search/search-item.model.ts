export interface StatisticsItem {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}
export interface SnippetItem {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailItem;
    medium: ThumbnailItem;
    high: ThumbnailItem;
    standard: ThumbnailItem;
    maxres: ThumbnailItem;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetItem;
  statistics: StatisticsItem;
}
