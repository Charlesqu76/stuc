import React, { Fragment } from "react";

export default class Help extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'contentBody'>
        <div className="helpNav">帮助</div>
        <header className="helpHeader">营销力评估体系</header>
        <div className="helpTableCon">
          <table className = 'helpTable'>
            <tr className="helptableHeader">
              <th>一级维度</th>
              <th>二级维度</th>
              <th colSpan="6">三级维度</th>
            </tr>
            <HelpTableData />
          </table>
        </div>
      </div>
    );
  }
}

class HelpTableData extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firName: [
          {
            name: "产品",
            secName: [
              {
                name: "外观",
                thiName: [
                  { name: "长宽高" },
                  { name: "轴距" },
                  { name: "轮毂" },
                ],
              },
              {
                name: "内饰",
                thiName: [
                  { name: "仪表盘" },
                  { name: "氛围灯" },
                  { name: "天窗" },
                ],
              },
              {
                name: "空间",
                thiName: [
                  { name: "头部空间" },
                  { name: "腿部空间" },
                  { name: "后备箱空间" },
                  { name: "空间灵活性" },
                ],
              },
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.data.firName.map((firValue) => {
          let firName = firValue.name;
          let firNameRowSpan = firValue.secName.length;
          let row = 0;
          return firValue.secName.map((secValue) => {
            row += 1;
              return (
                <tr className="helptableBody">
                  {row === 1 ? (
                    <td rowSpan={firNameRowSpan}>{firName}</td>
                  ) : (
                    <Fragment></Fragment>
                  )}
                  <td>{secValue.name}</td>
                  {secValue.thiName.map((thrValue) => {
                    return <td>{thrValue.name}</td>;
                  })}
                </tr>
              );

          });
        })}
      </Fragment>
    );
  }
}
