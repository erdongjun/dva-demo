
import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import Layout from '../../components/Common/Layout';


class PersonCenter extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Layout bgBlack={true} title="个人中心">

      </Layout>
    )
  }
}

export default connect(({personCenter, loading})=>({personCenter, loading}))(PersonCenter);
