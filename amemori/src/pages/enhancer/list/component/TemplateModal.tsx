import React, {FC, useEffect, useState} from 'react';
import moment from 'moment';
import { Modal, Result, Button, Form, DatePicker, Input, Upload, message, Radio } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { repair, getQueueNotify } from '.././service';
import styles from '../style.less';
import {API_URL} from "@/utils/request";
import { Player } from 'video-react';
import request from "@/utils/request";
import { UploadOutlined } from '@ant-design/icons';

interface OperationModalProps {
  done: boolean;
  visible: boolean;
  current: Partial<any> | undefined;
  onDone: () => void;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const { TextArea } = Input;
const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const TemplateModal: FC<OperationModalProps> = (props) => {
  const [state, setState] = useState({
                                         fileList: [],
                                         uploading: false,
                                       });

  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;
  const [type, setType] = useState<string>();
  const [id, setId] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrlOriginal, setImageUrlOriginal] = useState<string>();
  const [imageUrlEffect, setImageUrlEffect] = useState<string>();

  useEffect(() => {
    setState({
        fileList: [],
    });

    if (form && !visible) {
      form.resetFields();
      console.log('radio checked', 'video');
      form.setFieldsValue({ type: 'video' });
      setType('video');
    }
  }, [props.visible]);

  useEffect(() => {
    setState({
        fileList: [],
    });

    if (current) {
      setId(current.id);
      setType(current.type);
      setImageUrlOriginal(current.originalIconImg);
      setImageUrlEffect(current.effectIconImg);
      form.setFieldsValue({
        ...current,
        type: current.type,
        originalIconImg:[{
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: current.originalIconImg,
        }],
        effectIconImg:[{
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: current.effectIconImg,
        }],
      });
    } else {
        setId(null);
        setImageUrlOriginal(null);
        setImageUrlEffect(null);

        console.log('radio checked', 'video');
        form.setFieldsValue({ type: 'video' });
        setType('video');
    }
  }, [props.current]);

  const handleUpload = () => {
    const { fileList } = state;
    const formData = new FormData();
    const repairType = form.getFieldsValue('repairType').repairType;
    const style = form.getFieldsValue('style').style;

    formData.append('repairType', repairType);
    formData.append('style', style);

    fileList.forEach(file => {
          formData.append('multipartFile', file);
    });

    state.uploading = true;
    repair(repairType, formData).then(res=>{
      setTimeout( function(){
        console.log(res.data);

        if (res.data.repairId) {
            this.timer = setInterval(() => {
                getQueueNotify(res.data.repairId).then(response=>{
                    console.log(response.data);

                    if (response.data.process) {
                      if (response.data.process == -1) {
                          message.info('????????????:' + response.data.process + ', ????????????:' + response.data.processStr);
                          clearInterval();
                          return;
                      } else {
                          message.info('????????????:' + (response.data.process ? response.data.process : 0) + '%, ????????????:' + (response.data.queueNum ? response.data.queueNum : 0) + ', ??????????????????:' + (response.data.waitTime ? response.data.waitTime : 0) + '???...');

                          if (response.data.process == 100) {
                              clearInterval();
                              window.location.reload();
                          }
                      }
                    }
                })
            }, 3000);
        }
      }, 5 * 1000 );//??????5000??????
    })
  };

    /* request({
      url: 'http://localhost:8080/api/app/repair/multipartFile/lively-ref',
      method: 'POST',
      processData: false,
      data: formData,
      success: () => {
        setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });

    //form.submit();
  }; */

  const handleFinish = (values: { [key: string]: any }) => {
    values.originalIconImg = imageUrlOriginal;

    values.effectIconImg = imageUrlEffect;
    if (onSubmit) {
      onSubmit(values as any);
    }
  };

  const modalFooter = done
    ? { footer: null, onCancel: onDone }
    : { okText: '??????', onOk: handleUpload, onCancel };

  const getModalContent = () => {
    if (done) {
      return (
        <Result
          status="success"
          title="????????????"
          subTitle=""
          extra={
            <Button type="primary" onClick={onDone}>
              ?????????
            </Button>
          }
          className={styles.formResult}
        />
      );
    }

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>??????</div>
      </div>
    );

    const handleChange = (info, setTargetImage) => {
      if (info.file.status === 'uploading') {
        setLoading(true)
        return;
      }
      if (info.file.status === 'done') {
        setLoading(false)
        console.log("????????????:" + JSON.stringify(info.fileList[0].response.data));
        setTargetImage(info.fileList[0].response.data)
      }
    };

    const onChange = e => {
      console.log('radio checked', e.target.value);
      form.setFieldsValue({ type: e.target.value });
      setType(e.target.value);
      return e.target.value;
    };

    const { uploading, fileList } = useState({});
    const props = {
      onRemove: file => {
        setState(state => {
          const newFileList = state.fileList.slice();

          for (var i = 0; i < newFileList.length; i++) {
              if (file.uid == newFileList[i].uid) {
                  newFileList.splice(i, 1);
              }
          }

          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        <Form.Item
          name="id"
          hidden={true}
        >
        </Form.Item>

        <Form.Item
          name="type"
          label="??????"
          rules={[{ required: true, message: '???????????????' }]}
        >
            {
            (id) &&

              <Radio.Group onChange={onChange} value={type} disabled>
                <Radio value={'video'}>??????</Radio>
                <Radio value={'contrast'}>?????????</Radio>
                <Radio value={'cartoon'}>?????????</Radio>
              </Radio.Group>
            }

            {
            (!id) &&
              <Radio.Group onChange={onChange} value={type} disabled>
                <Radio value={'video'}>??????</Radio>
                <Radio value={'contrast'} checked>?????????</Radio>
                <Radio value={'cartoon'}>?????????</Radio>
              </Radio.Group>
            }

        </Form.Item>

        <Form.Item
          name="repairType"
          label="????????????"
          rules={[{ required: true, message: '?????????????????????:lively-ref | cartoon-ref | lively-Colorize-ref' }]}
        >
          <Input placeholder="?????????????????????:lively-ref | cartoon-ref | lively-Colorize-ref" />
        </Form.Item>

        <Form.Item
          name="style"
          label="??????"
          rules={[{ required: false, message: '???????????????:random' }]}
        >
          <Input placeholder="???????????????:random" />
        </Form.Item>

{(type == 'video') &&
        <Form.Item
          name="originalIconImg"
          label="??????"
          extra=""
          rules={[{ required: true, message: '???????????????' }]}
        >
          <Upload {...props} name="file" multiple showUploadList={true}
                  listType="picture-card"
                  >
                  <Button icon={<UploadOutlined />}>Select File</Button>
            {<Player fluid={false} width={110} height={80} playsInline src={imageUrlOriginal} />}
          </Upload>
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={false}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>
        </Form.Item>
}

{(type == 'contrast') &&
        <Form.Item
          name="originalIconImg"
          label="??????"
          extra="?????????720x1280"
          rules={[{ required: true, message: '???????????????' }]}
        >
          <Upload name="file" multiple showUploadList={false}
                  action={`${API_URL}/api/admin/upload/img`}
                  listType="picture-card"
                  onChange={(info => handleChange(info, setImageUrlOriginal))}>
            {<img src={imageUrlOriginal} alt="???????????????" style={{ width: 80, height: '100%' }} />}
          </Upload>
        </Form.Item>
}

{(type == 'cartoon') &&
        <Form.Item
          name="originalIconImg"
          label="?????????"
          extra="?????????720x1280"
          rules={[{ required: true, message: '??????????????????' }]}
        >
          <Upload name="file" multiple showUploadList={false}
                  action={`${API_URL}/api/admin/upload/img`}
                  listType="picture-card"
                  onChange={(info => handleChange(info, setImageUrlOriginal))}>
            {<img src={imageUrlOriginal} alt="??????????????????" style={{ width: 80, height: '100%' }} />}
          </Upload>
        </Form.Item>
}

{(type != 'video' && type != 'cartoon') &&
  <Form.Item
    name="effectIconImg"
    label="?????????"
    extra="?????????720x1280"
    rules={[{ required: true, message: '??????????????????' }]}
  >
    <Upload name="file" multiple showUploadList={false}
            action={`${API_URL}/api/admin/upload/img`}
            listType="picture-card"
            onChange={(info => handleChange(info, setImageUrlEffect))}>
      {imageUrlEffect ? <img src={imageUrlEffect} alt="??????????????????" style={{ width: 80, height: '100%' }} /> : uploadButton}
    </Upload>
  </Form.Item>
}
      </Form>
    );
  };

  return (
    <Modal
      title={done ? null : `??????${current ? '??????' : '??????'}`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default TemplateModal;
