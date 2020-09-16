import React from "react";
import "./hcCon.css";
import HcHead from './hcComponent/hcHead/hcHead.jsx';
import HcBodyCon from './hcComponent/hcBody/hcBody.jsx';
import HcDown from './hcComponent/hcDown/hcDown.jsx';

export default Hc;
function Hc(props) {
  let { data } = props;
  let history = useHistory();
  let detailClick = () => {
    let id = data.id;
    let url = `/huche/${id}`;
    history.push(url);
  };
  return (
    <div className="HcCon" id={data.id} onClick={detailClick}>
      <HcHead data={data.user} time={data.createTime} />
      <HcBodyCon cmt={data.content} media={data.media} />
      <HcDown
        hcLikeLen={data.huche_like}
        hcCommentLen={data.huche_Comment}
        watch={data.watch}
      />
    </div>
  );
}





