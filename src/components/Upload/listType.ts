import { UploadFile } from './type'
/**
 * @desc:文件上传列表接口约束
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:45:17
 */
export interface UploadListProps {
  fileList: UploadFile[]
  onRemove: (file: UploadFile) => void
}
