import { HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Card, Col, Input, Row } from 'antd';
import React, { Component} from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { RouteChildrenProps } from 'react-router';
import { ModalState } from './model';
import { CurrentUser } from './data.d';
import styles from './Center.less';


interface CenterProps extends RouteChildrenProps {
  dispatch: Dispatch;
  currentUser: Partial<CurrentUser>;
  currentUserLoading: boolean;
}


class Center extends Component<CenterProps> {

  public input: Input | null | undefined = undefined;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'accountAndcenter/fetchCurrent',
    });
    dispatch({
      type: 'accountAndcenter/fetch',
    });
  }

  renderUserInfo = (currentUser: Partial<CurrentUser>) => (
    <div className={styles.detail}>
      <p>
        <ContactsOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.title}
      </p>
      <p>
        <ClusterOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.group}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {(currentUser.geographic || { province: { label: '' } }).province.label}
        {
          (
            currentUser.geographic || {
              city: {
                label: '',
              },
            }
          ).city.label
        }
      </p>
    </div>
  );

  render() {
    const { currentUser = {}, currentUserLoading } = this.props;
    const dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);
    return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={{ span: 24 }} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={dataLoading}>
              {!dataLoading && (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser.avatar} />
                    <div className={styles.name}>{currentUser.name}</div>
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default connect(
  ({
    loading,
    accountAndcenter,
  }: {
    loading: { effects: { [key: string]: boolean } };
    accountAndcenter: ModalState;
  }) => ({
    currentUser: accountAndcenter.currentUser,
    currentUserLoading: loading.effects['accountAndcenter/fetchCurrent'],
  }),
)(Center);
