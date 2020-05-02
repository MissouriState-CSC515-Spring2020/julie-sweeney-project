import React, { Suspense, lazy } from "react";

const VideoListItem = lazy(() =>
import('./video_list_item'));

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <VideoListItem
                    onUserSelected={props.onVideoSelect}
                    key={video.etag}
                    video={video} />
            </Suspense>
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;