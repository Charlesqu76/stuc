import React, { Fragment, useState, useEffect } from "react";
import style from "./huche.css";
import { remoteGetHucheList } from "app/remote/huche/list";
import PostCon from "app/page/huche/huchePost/HuchePost";
import { eleIsVisiable } from "app/libs/utility";
import { action, observable, runInAction } from "mobx";
import { observer } from "mobx-react";

@observer
export default class HcCom extends React.Component {
  constructor() {
    super();
  }
  @observable data = null;
  componentDidMount() {
    // this.getHucheList();
  }

  // @action
  // async getHucheList() {
  //   const resp = await remoteGetHucheList.remote("huche");
  //   runInAction(() => {
  //     this.data = resp.data;
  //   });
  // }

  render() {
    return (
      <Fragment>
        <div className={style.HcComBody}>
          <PostCon />
          <div className={style.HcTotalCon}>
            {this.data
              ? this.data.map((value) => <Hc key={value.id} data={value} />)
              : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

// function HcList(props) {
//   const [dataList, setDataList] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   let url = `${baseUrl}/huche`;
//   useEffect(() => {
//     let HcLoadingCon = document.querySelector(".HcLoadingCon");
//     let watchBounding = () => {
//       if (eleIsVisiable(HcLoadingCon)) {
//         setPage(page + 1);
//         window.removeEventListener("scroll", watchBounding);
//       } else {
//         console.log("invisiable");
//       }
//     };
//     if (loading) {
//       window.addEventListener("scroll", watchBounding);
//     }
//     return () => {
//       window.removeEventListener("scroll", watchBounding);
//     };
//   }, [page]);

//   useEffect(() => {
//     {
//       props.data ? setDataList([props.data, ...dataList]) : null;
//     }
//   }, [props.data]);
//   return <></>;
// }
