import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
        <span>
          “지나가버린 것은 
          모두가 다 아름다웠다.
          
          여기 있는 것 남은것은 
          추녀밑에서서 우는 것
          욕이다 벌이다 문둥이다.
          
          옛날에 서서 우러러보던 하늘은
          아직도 푸르기만 하다마는.
          
          아 꽃과 같던 삶과 
          꽃일 수 없는 삶과의 
          갈등 사잇길에 쩔룩거리며 섰다.
          
          잠깐이라도 이 낯선 집
          추녀 밑에 서서 우는것은
          욕이다 벌이다 문둥이다”
        </span>
        <span>− 한하운, 삶</span>
      </div>
    );
}

export default About;