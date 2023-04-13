interface Video {
    id: string;
    title: string;
    description: string;
    views: number;
    likes: number;
    dislikes: number;
    tags: string[];
    uploadDate: Date;
    uploader: string;
    duration: number;
  }
  
  class VideoDatabase {
    private videos: Video[];
  
    constructor() {
      this.videos = [];
    }
  
    public addVideo(video: Video): void {
      this.videos.push(video);
    }
  
    public getVideoById(id: string): Video | undefined {
      return this.videos.find(video => video.id === id);
    }
  
    public getVideosByUploader(uploader: string): Video[] {
      return this.videos.filter(video => video.uploader === uploader);
    }
  
    public getMostViewedVideos(limit: number): Video[] {
      return this.videos.sort((a, b) => b.views - a.views).slice(0, limit);
    }
  
    public getMostLikedVideos(limit: number): Video[] {
      return this.videos.sort((a, b) => b.likes - a.likes).slice(0, limit);
    }
  
    public getMostDislikedVideos(limit: number): Video[] {
      return this.videos.sort((a, b) => b.dislikes - a.dislikes).slice(0, limit);
    }
  
    public getRecentVideos(limit: number): Video[] {
      return this.videos.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()).slice(0, limit);
    }
  
    public getVideosByTag(tag: string): Video[] {
      return this.videos.filter(video => video.tags.includes(tag));
    }
  }
  
  // Example usage:
  const database = new VideoDatabase();
  database.addVideo({
    id: "1",
    title: "placeholder",
    description: "placeholder",
    views: 10,
    likes: 2,
    dislikes: 1,
    tags: ["first", "video"],
    uploadDate: new Date("2022-01-01"),
    uploader: "channel",
    duration: 60
  });
  const video = database.getVideoById("abc123");
  console.log(video); // { id: "abc123", title: "My First YouTube Video", ... }
  const recentVideos = database.getRecentVideos(5);
  console.log(recentVideos); // [ { id: "abc123", ... }, ... ]