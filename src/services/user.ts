import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/auth/info');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/pms/auth/info');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
