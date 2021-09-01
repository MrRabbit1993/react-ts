export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
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
  action: string
  defaultFileList?: UploadFile[]
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<File>
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
  headers?: {
    [key: string]: any
  }
  name?: string
  data?: {
    [key: string]: any
  }
  withCredentials?: boolean
  accept?: string
  multiple?: boolean
  drag?: boolean
}
