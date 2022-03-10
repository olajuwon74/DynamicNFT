import React, { useState, useEffect } from 'react';
import {Card, Table, Image, Button, Divider, Row, Col, Form, Modal, DatePicker, Select, Input, Tooltip} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { listInfo, addInfo, detailInfo, saveInfo, delInfo, queryRule, repair, getQueueNotify } from './service';
import {API_URL} from "@/utils/request";
import EditForm from './EditForm';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css";
import moment from 'moment';
import TemplateModal from './component/TemplateModal';
import {withRouter } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Option } = Select;

const TableList: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState<Object>({
    pageNum:1,
    pageSize:20
  });
  const [tableData, setTableData] = useState({
    pagination:{},
    data:[]
  });

  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<any> | undefined>(undefined);

  const showModal = () => {
    //setVisible(true);
    //setCurrent(undefined);
    props.history.push({ pathname : '/enhancer/index' , query : {}});
  };

const handleDone = () => {
    setDone(false);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = (values: any) => {
    if (values.id) {
        // 保存
        saveInfo(values).then(res=>{
          setDone(true);
          pageData();
        })
    } else {
        // 新增
        addInfo(values).then(res=>{
          setDone(true);
          pageData();
        })
    }
  };

  const pageData = () => {
    setLoading(true);
    queryRule(params).then(res=>{
      const tableData = res.data;
      setTableData({
        pagination:{
          total: tableData.total,
          current: tableData.current,
          pageSize: tableData.size,
        },
        data:tableData.records
      })
      setLoading(false);
    })
  }

  const handleTableChange = (_pagination) =>{
    setParams({...params,pageNum:_pagination.current,pageSize: _pagination.pageSize});
  }

  const search = (values) => {
    let format = "yyyy-MM-DD HH:mm:ss";
    let valueObj = {};
    if(values.createDate != null){
      valueObj.gmtCreateMin = values.createDate[0].format(format);
      valueObj.gmtCreateMax = values.createDate[1].format(format);
    }else{
      valueObj.gmtCreateMin = '';
      valueObj.gmtCreateMax = '';
    }

    valueObj.userId = values.userId;
    setParams({...params,...valueObj,type:values.type});
  }


  const exportExcel = () =>{
    window.open(API_URL+`/api/admin/export/userCount`);
  }


  useEffect(() => {
    pageData();
  },[]);

  useEffect(() => {
    pageData();
  },[params]);


  const [form] = Form.useForm();
  const columns = [
    {
      title: '用户id',
      dataIndex: 'userId',
       ellipsis: {
             showTitle: false,
       },
       render: userId => (
         <Tooltip placement="topLeft" title={userId}>
           {userId}
         </Tooltip>
       ),
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
       width: 120,
       ellipsis: {
             showTitle: false,
       },
       render: (_,record)=>(
       <div>
         {
           (record.appUserEntity) &&
           <Tooltip placement="topLeft" title={record.appUserEntity.nickName}>
                      {record.appUserEntity.nickName}
           </Tooltip>
         }
         </div>
       )
    },
    {
      title: '调用功能',
      dataIndex: 'type',
      width: 100,
      render: type => <div>
        {type.indexOf('all') > -1 && <div>一键修复</div>}
        {type.indexOf('old_repair') > -1 && <div>老照片修复</div>}
        {type.indexOf('super') > -1 && <div>高清增强</div>}
        {type.indexOf('color') > -1 && <div>黑白上色</div>}
        {type.indexOf('lively') > -1 && <div>一键灵动增强</div>}
        {type.indexOf('cartoon') > -1 && <div>卡通表情</div>}
        {type.indexOf('active') > -1 && <div>动态表情</div>}
      </div>
    },
    {
      title: '调用时间',
      dataIndex: 'gmtCreate',
      sorter: true,
      valueType: 'dateTime',
       render: (_,record)=>(
        <div>
        {
          moment(record.gmtCreate).format('YYYY-MM-DD HH:mm:ss')
        }
        </div>
       )
    },
    {
      title: '原始图片',
      dataIndex: 'originUrl',
      render: (_,record)=>(
        <div>
          <Image
            width={80}
            src={record.originUrl}
          />
        </div>
      )
    },
    {
      title: '处理后图片',
      dataIndex: 'destUrl',
      render: (_,record)=>(
        <div>
          {
            (record.type.indexOf('active') > -1) && record.headUrlList &&
            <Image
              width={80}
              src={record.headUrlList[1]}
            />
          }
          {
            ( record.type.indexOf('cartoon') > -1) && record.headUrlList &&
            <Image
              width={80}
              src={record.headUrlList[1]}
            />
          }
          {
            ( record.type.indexOf('cartoon') <= -1 && record.type.indexOf('active') <= -1) &&
            <Image
              width={80}
              src={record.destUrl}
            />
          }
        </div>
      )
    },
    {
      title: '视频',
      dataIndex: 'videoUrl',
      render: (_,record)=>(
        <div>
          <Player
            fluid={false}
            width={110}
            height={80}
            playsInline
            src={record.videoUrl}
          />
        </div>
      )
    },
    {
      title: '处理时间(秒)',
      dataIndex: 'times',
      width: 100
    },
  ];

  return (
    <PageHeaderWrapper>

      <Card bordered={false} style={{marginBottom:25}}>
        <Form
          form={form}
          onFinish={search}
        >
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item
                name="type"
              >
                <Select defaultValue="" style={{ width: 200 }}>
                  <Option value="">全部</Option>
                  <Option value="all">一键修复</Option>
                  <Option value="old_repair">老照片修复</Option>
                  <Option value="color">黑白上色</Option>
                  <Option value="super">高清增强</Option>
                  <Option value="lively">一键灵动增强</Option>
                  <Option value="cartoon">卡通表情</Option>
                  <Option value="active">动态表情</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="createDate"
                label="调用时间"
              >
                <RangePicker />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="userId" label="userId"><Input/></Form.Item>
            </Col>

          </Row>

          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>

              <Button type="default" htmlType="submit" style={{marginLeft:20}} onClick={showModal}>
                上传图片/视频
              </Button>
            </Col>
          </Row>

        </Form>
      </Card>

      {/* table */}
      <Card bordered={false}>
        <Table
          size="middle"
          loading={loading}
          rowKey="id"
          ellipsis
          columns={columns}
          pagination={tableData.pagination}
          dataSource={tableData.data}
          onChange={handleTableChange}
        />
      </Card>

      <TemplateModal
        done={done}
        current={current}
        visible={visible}
        onDone={handleDone}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </PageHeaderWrapper>
  );
};

export default withRouter(TableList);
