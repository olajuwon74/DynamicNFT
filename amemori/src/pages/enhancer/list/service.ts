import request from '@/utils/request';

export async function queryRule(params) {
  return request('/api/admin/repair/page', {
    params,
  },true);
}

export async function listInfo() {

}

export async function addInfo(params) {

}

export async function saveInfo(params) {

}

export async function detailInfo(id) {

}

export async function delInfo(id) {

}

export async function repair(repairType, formData) {
  return request(`/api/app/repair/multipartFile/` + repairType, {
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

export async function getQueueNotify(repairId) {
  return request(`/api/app/repair/result/${repairId}`, {
    method: 'GET',
  },true);
}

export async function upload(params) {
  return request(`/api/app/repair/multipartFile/lively-ref`, {
    method: 'POST',
    data: params,
  },true);
}
