export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

/**
 * @desc:文件上传接口约束
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:45:17
 */
export interface UploadProps {
  action: string // 接口位置
  defaultFileList?: UploadFile[]
  onProgress?: (percentage: number, file: File) => void //进度、
  onSuccess?: (data: any, file: File) => void // 成功
  onError?: (err: any, file: File) => void // 错误
  beforeUpload?: (file: File) => boolean | Promise<File> // 上传之前到钩子
  onChange?: (file: File) => void // 文件改变
  onRemove?: (file: UploadFile) => void //移除
  headers?: { [key: string]: any }
  name?: string
  data?: { [key: string]: any }
  withCredentials?: boolean
  accept?: string
  multiple?: boolean
}
