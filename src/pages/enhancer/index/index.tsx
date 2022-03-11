import React, {FC, useEffect, useState} from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import moment from 'moment';
import styles from '../style.less';
import {API_URL} from "@/utils/request";
import request from "@/utils/request";
import { LoadingOutlined, PlusOutlined, UploadOutlined, HeartTwoTone } from '@ant-design/icons';
import "../../../../node_modules/video-react/dist/video-react.css";
import { Modal, Result, Button, Form, DatePicker, Input, Upload, message, Radio, Image, Divider, Slider } from 'antd';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import {withRouter } from 'react-router-dom';
import { Link } from 'umi';
import { VideoThumbnail } from 'react-video-thumbnail';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    //reader.onload = () => resolve(reader.result);

    reader.onload = function (e) {
      if (file.type.indexOf('image') > -1) {
        resolve(reader.result);
      } else if (file.type.indexOf('video') > -1) {
        resolve(reader.result);
        //resolve("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3498227956,2363956367&fm=26&gp=0.jpg");
      }
    }

    reader.onerror = error => reject(error);
  });
}

export function repair(repairType, formData) {
  return request(`/api/app/repair/upload/` + repairType, {
    method: 'POST',
    data: formData,
    async: false,
    success: () => {
      setState({
        fileList: [],
        uploading: false,
      });
      message.success('upload successfully.');
    },
    error: () => {
      setState({
        uploading: true,
      });
      message.error('upload failed.');
    },
  },true);
}

export function repairSession(repairType, formData) {
  return request(`/api/app/repair/repair/` + repairType, {
    method: 'POST',
    data: formData,
    async: false,
    success: () => {
      setState({
        fileList: [],
        uploading: false,
      });
      message.success('repair successfully.');
    },
    error: () => {
      setState({
        uploading: true,
      });
      message.error('repair failed.');
    },
  },true);
}

export async function getQueueNotify(sessionId) {
  return request(`/api/app/repair/repairResult/${sessionId}`, {
    method: 'GET',
  },true);
}

export async function upload(params) {
  return request(`/api/app/repair/multipartFile/lively-ref`, {
    method: 'POST',
    data: params,
  },true);
}


export default(props) => {
  const formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };
  const [responsive, setResponsive] = useState(false);
  const [state, setState] = useState({
                                         fileList: [],
                                         uploading: false,
                                         previewImage: '',
                                         previewVideo: '',
                                       });

  props = {
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

  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;
  const [type, setType] = useState<string>("image");
  const [id, setId] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrlOriginal, setImageUrlOriginal] = useState<string>();
  const [imageUrlEffect, setImageUrlEffect] = useState<string>();
  const [fileList, setFileList] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();
  const [previewVideo, setPreviewVideo] = useState<string>();
  //const [repairType, setRepairType] = useState<string>();
  const [size, setSize] = useState(8);
  const [repairId, setRepairId] = useState<string>();
  const [sessionId, setSessionId] = useState<string>();
  const [currentStyle, setCurrentStyle] = useState<string>();

  const handlePreview = async (file) => {
    if (file.type.indexOf('image') > -1) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      setType('image');
      setPreviewImage(file.url || file.preview);
    } else if (file.type.indexOf('video') > -1) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      setType('video');
      setPreviewVideo(file.url || file.preview);
    } else {
      setType('');
    }
  };

  const previewVideoFile = async (file) => {
    if (file.type.indexOf('video') > -1) {
        setType('video');
        setPreviewVideo(file.url || file.preview);
    } else if (file.type.indexOf('image') > -1) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      setType('image');
      setPreviewImage(file.url || file.preview);
    } else {
      setType('');
    }
  };

  const handleFinish = (values: { [key: string]: any }) => {
    values.originalIconImg = imageUrlOriginal;

    values.effectIconImg = imageUrlEffect;
    if (onSubmit) {
      onSubmit(values as any);
    }
  };

  useEffect(() => {
    setState({
        fileList: [],
    });

    if (current) {

    } else {

    }

    message.config({
      top: 180,
    });
  }, [props.current]);

  const handleChange = async (info, setTargetImage) => {
    if (info.fileList[info.fileList.length - 1].type.indexOf('image') > -1) {
      setType('image');

      /*if (!form.getFieldsValue('style').style) {
          message.info('please select style...');
          return;
      }*/
    } else if (info.fileList[info.fileList.length - 1].type.indexOf('video') > -1) {
      setType('video');
    } else {
      setType('image');
    }

    setRepairId('');
    setSessionId('');
    if (info.fileList[info.fileList.length - 1].type.indexOf('image') > -1) {
      if (!info.fileList[info.fileList.length - 1].url && !info.fileList[info.fileList.length - 1].preview) {
        info.fileList[info.fileList.length - 1].preview = await getBase64(info.fileList[info.fileList.length - 1].originFileObj);
      }

      setType('image');
      setPreviewImage(info.fileList[info.fileList.length - 1].url || info.fileList[info.fileList.length - 1].preview);
    } else if (info.fileList[info.fileList.length - 1].type.indexOf('video') > -1) {
      if (!info.fileList[info.fileList.length - 1].url && !info.fileList[info.fileList.length - 1].preview) {
        info.fileList[info.fileList.length - 1].preview = await getBase64(info.fileList[info.fileList.length - 1].originFileObj);
      }

      setType('video');
      setPreviewVideo(info.fileList[info.fileList.length - 1].url || info.fileList[info.fileList.length - 1].preview);
    } else {
      setType('image');
    }

    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false)
      console.log("image info:" + JSON.stringify(info.fileList[0].response.data));
      setTargetImage(info.fileList[0].response.data)
    }

    setFileList(info.fileList);

    if (info.fileList[info.fileList.length - 1].type.indexOf('image') > -1) {
        // 调用创建任务接口(图片)
        handleUpload();
    } else if (info.fileList[info.fileList.length - 1].type.indexOf('video') > -1) {
        // 调用创建任务接口(视频)
        handleVideoUpload();
    }
  };

  // 跳转至图像修复列表页面
  const goToRepairList = () => {
    //props.history.push({ pathname : '/repair/page' , query : { pageNum: 1, pageSize: 100 }})
    window.location.href = "/enhancer/list?pageNum=1&pageSize=20";
  };

  const handleUpload = () => {
    const hide = message.loading('In the processing...', 180);
    const { fileList } = state;
    const formData = new FormData();
    const repairType = "cartoon";//form.getFieldsValue('repairType').repairType;

    /*if (!form.getFieldsValue('style').style) {
        message.info('please select style...');
        return;
    }*/

    formData.append('type', repairType);
    formData.append('style', form.getFieldsValue('style').style);

    /*fileList.forEach(file => {
          formData.append('multipartFile', file);
    });*/

    formData.append('file', fileList[fileList.length - 1]);

    state.uploading = true;
    repair(repairType, formData).then(res=>{
      setTimeout( function(){
        console.log(res.data);

        if (res.data && res.data.repairId) {
          message.success('upload success...');
          setRepairId(res.data.repairId);
          setSessionId(res.data.sessionId);
          const { fileList } = state;
          formData.append('type', repairType);
          formData.append('sessionId', res.data.sessionId);

          if (form.getFieldsValue('style').style.indexOf('NFT_houtu') > -1) {
            formData.set('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*48)));
            console.log('current random style:' + formData.get('style'));
          } else if (form.getFieldsValue('style').style.indexOf('NFT_CG4') > -1) {
            formData.set('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*499)));
            console.log('current random style:' + formData.get('style'));
          } else if (form.getFieldsValue('style').style.indexOf('NFT_shouhui') > -1) {
            formData.set('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*35)));
            console.log('current random style:' + formData.get('style'));
          }

          /*fileList.forEach(file => {
                formData.append('multipartFile', file);
          });*/

          //formData.append('file', fileList[fileList.length - 1]);

          state.uploading = true;
          repairSession(repairType, formData).then(res=>{
            hide();
            setTimeout( function(){
              console.log(res.data);

              if (res.data && res.data.sessionId) {
                hide();
                message.success('random success...');
                this.timer = setInterval(() => {
                  getQueueNotify(res.data.sessionId).then(response=>{
                    console.log(response.data);

                    if (response.data && response.data[response.data.length - 1].process) {
                      if (response.data[response.data.length - 1].process == -1) {
                        message.info('process:' + response.data[response.data.length - 1].process + ', reason:' + response.data[response.data.length - 1].processStr);
                        clearInterval(this.timer);
                        return;
                      } else {
                        message.info('process:' + (response.data[response.data.length - 1].process ? response.data[response.data.length - 1].process : 0) + '%, waiting time:' + (response.data[response.data.length - 1].waitTime ? response.data[response.data.length - 1].waitTime : 0) + 'seconds...');

                        if (response.data[response.data.length - 1].process == 100) {
                            clearInterval(this.timer);

                            if (response.data[response.data.length - 1].headUrlList) {
                              for (var index = 0; index < response.data[response.data.length - 1].headUrlList.length; index++) {
                                  var destUrl = response.data[response.data.length - 1].headUrlList[index];

                                  if (destUrl.indexOf('local_0_split_out.jpg') > -1) {
                                      setPreviewImage(destUrl);
                                      return;
                                  }
                              }
                            }
                        }
                      }
                    } else {
                        message.info('process:0%, reason:In processing, please wait.');
                    }
                  })
                }, 3000);
              }
            }, 1000 );//延迟1000毫米
          })
        }
      }, 1000 );//延迟1000毫米
    })
  };

  const handleVideoUpload = () => {
    const hide = message.loading('In the processing...', 180);
    const { fileList } = state;
    const formData = new FormData();
    const repairType = "cartoon_video";
    const dataType = "mp4";

    formData.append('type', repairType);
    formData.append('dataType', dataType);
    formData.append('file', fileList[fileList.length - 1]);

    state.uploading = true;
    repair(repairType, formData).then(res=>{
      setTimeout( function(){
        console.log(res.data);

        if (res.data && res.data.repairId && res.data.sessionId) {
          hide();
          message.success('upload success...');
          setRepairId(res.data.repairId);
          setSessionId(res.data.sessionId);

          formData.append('type', repairType);
          formData.append('sessionId', res.data.sessionId);

          repairSession(repairType, formData).then(res=>{
            setTimeout( function(){
              console.log(res.data);

              if (res.data && res.data.sessionId) {
                hide();
                message.success('Processing is complete...');
                this.timer = setInterval(() => {
                  getQueueNotify(res.data.sessionId).then(response=>{
                    console.log(response.data);

                    if (response.data && response.data[response.data.length - 1].process) {
                      if (response.data[response.data.length - 1].process == -1) {
                        message.info('process:' + response.data[response.data.length - 1].process + ', reason:' + response.data[response.data.length - 1].processStr);
                        clearInterval(this.timer);
                        return;
                      } else {
                        message.info('process:' + (response.data[response.data.length - 1].process ? response.data[response.data.length - 1].process : 0) + '%, waiting time:' + (response.data[response.data.length - 1].waitTime ? response.data[response.data.length - 1].waitTime : 0) + 'seconds...');

                        if (response.data[response.data.length - 1].process == 100) {
                          clearInterval(this.timer);

                          if (response.data[response.data.length - 1]) {
                            var videoUrl = response.data[response.data.length - 1].videoUrl;
                            setPreviewVideo(videoUrl);
                          }
                        }
                      }
                    } else {
                        message.info('process:0%, reason:In processing, please wait.');
                    }
                  })
                }, 3000);
              }
            }, 1000 );//延迟1000毫米
          })
         }
      }, 1000 );//延迟1000毫米
    })
  };

  const handleRepairSession = () => {
      console.log('current select style:' + form.getFieldsValue('style').style);
      /*if (!form.getFieldsValue('style').style) {
          message.info('please select style...');
          return;
      }*/

      if (!sessionId) {
          message.info('please wait upload Photo/Video...');
          return;
      }

      const hide = message.loading('random...', 180);
      const { fileList } = state;
      const formData = new FormData();
      const repairType = "cartoon";//form.getFieldsValue('repairType').repairType;

      formData.append('type', repairType);
      formData.append('sessionId', sessionId);

      if (form.getFieldsValue('style').style.indexOf('NFT_houtu') > -1) {
        formData.append('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*48)));
        console.log('current random style:' + formData.get('style'));
      } else if (form.getFieldsValue('style').style.indexOf('NFT_CG4') > -1) {
        formData.append('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*499)));
        console.log('current random style:' + formData.get('style'));
      } else if (form.getFieldsValue('style').style.indexOf('NFT_shouhui') > -1) {
        formData.append('style', form.getFieldsValue('style').style + '_' + Math.floor((Math.random()*35)));
        console.log('current random style:' + formData.get('style'));
      }

      /*fileList.forEach(file => {
            formData.append('multipartFile', file);
      });*/

      //formData.append('file', fileList[fileList.length - 1]);

      state.uploading = true;
      repairSession(repairType, formData).then(res=>{
        setTimeout( function(){
          console.log(res.data);

          if (res.data && res.data.sessionId) {
            hide();
            message.success('random success...');
            this.timer = setInterval(() => {
              getQueueNotify(res.data.sessionId).then(response=>{
                console.log(response.data);

                if (response.data && response.data[response.data.length - 1].process) {
                  if (response.data[response.data.length - 1].process == -1) {
                    message.info('process:' + response.data[response.data.length - 1].process + ', reason:' + response.data[response.data.length - 1].processStr);
                    clearInterval(this.timer);
                    return;
                  } else {
                    message.info('process:' + (response.data[response.data.length - 1].process ? response.data[response.data.length - 1].process : 0) + '%, waiting time:' + (response.data[response.data.length - 1].waitTime ? response.data[response.data.length - 1].waitTime : 0) + 'seconds...');

                    if (response.data[response.data.length - 1].process == 100) {
                        clearInterval(this.timer);

                        if (response.data[response.data.length - 1].headUrlList) {
                          for (var index = 0; index < response.data[response.data.length - 1].headUrlList.length; index++) {
                              var destUrl = response.data[response.data.length - 1].headUrlList[index];

                              if (destUrl.indexOf('local_0_split_out.jpg') > -1) {
                                  setPreviewImage(destUrl);
                                  return;
                              }
                          }
                        }
                    }
                  }
                } else {
                    message.info('process:0%, reason:In processing, please wait.');
                }
              })
            }, 3000);
          }
        }, 1000 );//延迟1000毫米
      })
    };

  return (
  <Form {...formLayout} form={form} onFinish={handleFinish}>

    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
    <ProCard split="horizontal"  style={{"overflow":"none"}}>
        <ProCard title="Upload Photo/Video">
          <div id="upload">
                      <Upload {...props} name="file" maxCount={1} showUploadList={false}
                        onChange={(info => handleChange(info, setImageUrlOriginal))}>
                        <Button icon={<UploadOutlined />}>Single/Multiple Task(s) Upload</Button>
                      </Upload>&nbsp;
                      {/*<Upload {...props} name="file" multiple showUploadList={false} directory={true}
                        onChange={(info => handleChange(info, setImageUrlOriginal))}>
                        <Button icon={<UploadOutlined />}>Upload folders</Button>
                      </Upload>&nbsp;
                      <Link to={{
                       pathname: '/enhancer/list',
                        query: {
                          pageNum: 1,
                          pageSize: 20
                        }
                      }}>
                        <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />}>image random list</Button>
                      </Link>*/}&nbsp;
                      {/*<Button icon={<HeartTwoTone twoToneColor="#eb2f96" />} onClick={handleUpload}>Create a task</Button>
                      <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />} onClick={handleRepairSession}>Random</Button>*/}
                    </div>
        </ProCard>

        <ProCard split={'vertical'}>
          <ProCard split="horizontal" colSpan="88%">
            <ProCard split="horizontal">
              <ProCard style={{height:600,align:'center'}}>
                <ProCard title="" layout="center">
                  <div>
                    {(type == 'image') && <Image alt="" src={previewImage} height={500} />}
                    {(type == 'video') && <Player fluid={false} height={500} playsInline src={previewVideo} preload="auto" autoPlay={true} />}
                  </div>
                  <div style={{pointerEvents: visible, opacity: 0}}>
                    <Upload {...props} fileList={fileList} showUploadList={{showRemoveIcon:false}} listType="picture-card" onPreview={handlePreview} onClick={previewVideoFile}></Upload>
                  </div>
                </ProCard>
              </ProCard>
            </ProCard>
          </ProCard>

          {(type == 'image') && <ProCard title="Choose Style" style={{"overflow":"auto"}}>
            <div style={{height:570}}>
                <Form.Item
                  name="style"
                  label=""
                  initialValue="NFT_houtu"
                  rules={[{ required: true, message: 'please select style' }]}
                >
                  <Radio.Group defaultValue={"NFT_houtu"}>
                    <Radio value={'NFT_houtu'}>Glowing Beauty</Radio><Image width={90} height={90} src="https://s3.us-east-2.amazonaws.com/app-s3-us-east-2/upload/OAHwkQkefbDcHZdmHWJKpgxuvGlrzhOz" alt="NFT_houtu" />
                    <Divider />
                    <Radio value={'NFT_CG4'}>CG Illustration</Radio><Image width={90} height={90} src="https://s3.us-east-2.amazonaws.com/app-s3-us-east-2/upload/pNUimzdmSRwnzCzNutDbciAbSNPXVkOo" alt="NFT_CG4" />
                    <Divider />
                    <Radio value={'NFT_shouhui'}>Sketch Beauty</Radio><Image width={90} height={90} src="https://s3.us-east-2.amazonaws.com/app-s3-us-east-2/upload/MzCSszeuBUrYqxTSsnLMDqjfQxheoTIj" alt="NFT_shouhui" />
                  </Radio.Group>
                </Form.Item>
                <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />} onClick={handleRepairSession}>Random</Button>
            </div>
          </ProCard>}
        </ProCard>
      </ProCard>
    </RcResizeObserver>

  </Form>
  );
};
