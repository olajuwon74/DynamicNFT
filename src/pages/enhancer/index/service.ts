import request from '@/utils/request';

export async function userCount(): Promise<any> {
  return request('/api/admin/user/count');
}

export async function repairCount(): Promise<any> {
  return request('/api/admin/user/function/count');
}
