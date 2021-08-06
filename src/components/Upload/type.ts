/**
 * @desc:文件上传接口约束
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:45:17
 */
export interface UploadProps {
  action: string // 接口位置
  onProgress?: (percentage: number, file: File) => void //进度、
  onSuccess?: (data: any, file: File) => void // 成功
  onError?: (err: any, file: File) => void // 错误
}
