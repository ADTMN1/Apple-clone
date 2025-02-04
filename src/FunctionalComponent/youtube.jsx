import React, { useEffect, useState } from 'react';

const Youtube = () => {
  const [youtube, setVideos] = useState([]);


  // AIzaSyCCEzXrJ6QfWE7QkadQza8Tp0CL1MazBQ4
  // // https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=
  // UCgdecrMD1EfiqFL_jlnPxvg&maxResults=9&key=AIzaSyCCEzXrJ6QfWE7QkadQza8Tp0CL1MazBQ4



  useEffect(() => {

    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((res) => res.json())
      .then((data) => {
        const youtubeDataVideos = data.items;
        setVideos(youtubeDataVideos);
      });
  }, []);


  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-stretch">
          <div className="col-12 text-center">
            <div className="title-wraper bold video-title-wrapper">
              <h1>Latest Videos</h1>
            </div>
          </div>
          {youtube?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={i} className="col-sm-12 col-md-4 d-flex mb-4">
                <div className="singleVideoWrapper flex-fill">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noopener noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
