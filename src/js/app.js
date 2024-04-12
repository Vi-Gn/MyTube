

"use strict"
// window.addEventListener('load', main);
// Everything shall be inside main()




// class VideoObj {
//   constructor(
//     src_thumbnail = null,
//     src_profile_pic = null,
//     title = null,
//     profile_name = null,
//     view_count = null,
//     time_past = null
//   ) {
//     this.src_thumbnail = src_thumbnail;
//     this.src_profile_pic = src_profile_pic;
//     this.title = title;
//     this.profile_name = profile_name;
//     this.view_count = view_count;
//     this.time_past = time_past;
//   }
// }

main();

function main(){
  // Start script

  for (let item of videoList){
    CreateVideo(item);
  }
  for (let item of reelList){
    CreateReel(item);
  }
  

  // End script
}


function CreateReel(reelListData){
  
  // access the short_list
  let div_short_list = document.querySelector("#short_list");

  // create the card short wrapper with its attributes
  let div_wrap_short = document.createElement("div");
  div_wrap_short.setAttribute("class", "main_short_wrapper");

  // append the short card into the list
  div_short_list.appendChild(div_wrap_short);

  // create the card short wrapper with its attributes
  let div_wrap_short_thumbnail = document.createElement("div");
  div_wrap_short_thumbnail.setAttribute("class", "main_short_thumbnail_wrapper");

  // append the short card into the list
  div_wrap_short.appendChild(div_wrap_short_thumbnail);

  let img_short_thumbnail = document.createElement("img");
  img_short_thumbnail.setAttribute("src", reelListData["thumbnail"]);
  img_short_thumbnail.setAttribute("class", "main_short_thumbnail");

  // append the video thumbnail into the card video
  div_wrap_short_thumbnail.appendChild(img_short_thumbnail);
  
  let p_short_title = document.createElement("p");
  p_short_title.innerHTML = reelListData["title"];
  p_short_title.setAttribute("class", "main_short_title");
  div_wrap_short.appendChild(p_short_title);
  
  
  let p_profile_stats = document.createElement("p");
  p_profile_stats.setAttribute("class", "main_short_profile_stats");
  div_wrap_short.appendChild(p_profile_stats);

  let span_view_count = document.createElement("span");
  span_view_count.setAttribute("class", "view_count_short_id");
  span_view_count.innerHTML = reelListData["view_count"] + " views ";
  p_profile_stats.appendChild(span_view_count);

}

function CreateVideo(videoListData) {

  // access the video_list
  let div_video_list = document.querySelector("#video_list");

  // create the card video wrapper with its attributes
  let div_wrap = document.createElement("div");
  div_wrap.setAttribute("class", "main_video_wrapper");

  // append the video card into the list
  div_video_list.appendChild(div_wrap);

  // create the thumbnail with its attributes
  let img_thumbnail = document.createElement("img");
  img_thumbnail.setAttribute("src", videoListData["src_thumbnail"]);
  img_thumbnail.setAttribute("class", "main_video_thumbnail");

  // append the video thumbnail into the card video
  div_wrap.appendChild(img_thumbnail);

  let div_wrap_sec = document.createElement("div");
  div_wrap_sec.setAttribute("class", "main_video_wrapper_second");
  div_wrap.appendChild(div_wrap_sec);

  let img_profile_pic = document.createElement("img");
  img_profile_pic.setAttribute("src", videoListData["src_profile_pic"]);
  img_profile_pic.setAttribute("class", "main_video_profile_pic");
  div_wrap_sec.appendChild(img_profile_pic)

  let div_wrap_third = document.createElement("div");
  div_wrap_third.setAttribute("class", "main_video_wrapper_third");
  div_wrap_sec.appendChild(div_wrap_third);

  let p_title = document.createElement("p");
  p_title.innerHTML = videoListData["title"];
  p_title.setAttribute("class", "main_video_title");
  div_wrap_third.appendChild(p_title);

  let p_profile_name = document.createElement("p");
  p_profile_name.setAttribute("class", "main_video_profile_name");
  p_profile_name.innerHTML = videoListData["profile_name"];
  div_wrap_third.appendChild(p_profile_name);


  let p_profile_stats = document.createElement("p");
  p_profile_stats.setAttribute("class", "main_video_profile_stats");
  div_wrap_third.appendChild(p_profile_stats);

  let span_view_count = document.createElement("span");
  span_view_count.setAttribute("class", "view_count_id");
  span_view_count.innerHTML = videoListData["view_count"] + " views &bull; ";
  p_profile_stats.appendChild(span_view_count);

  let span_time_past = document.createElement("span");
  span_time_past.setAttribute("class", "time_past_id");
  span_time_past.innerText = videoListData["time_past"] + " ago";
  p_profile_stats.appendChild(span_time_past);

}