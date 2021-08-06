import React, { ChangeEvent, FC, useRef } from 'react'
import { UploadProps } from './type'
import Button, { ButtonType } from './../Button'
import axios from 'axios'
export * from './type'
const Upload: FC<UploadProps> = (props) => {
  const { action, onProgress, onError, onSuccess } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const handlerClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handlerFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files) // 上传文件
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach((file) => {
      const formData = new FormData()
      formData.append(file.name, file)
      axios
        .post(action, formData, {
          headers: {
            'Content-type': 'multipart/form-data'
          },
          onDownloadProgress: (e) => {
            let percentage = Math.round((e.loaded * 100) / e.total) || 0
            if (percentage < 100) {
              onProgress?.(percentage, file)
            }
          }
        })
        .then((resp) => {
          console.log(resp)
          onSuccess?.(resp.data, file)
        })
        .catch((err) => {
          onError?.(err, file)
        })
    })
  }
  return (
    <div className="">
      <Button btnType={ButtonType.Primary} onClick={handlerClick}>
        Upload file
      </Button>
      <input
        className="viking-file-input"
        style={{ display: 'none' }}
        type="file"
        ref={fileInput}
        onChange={handlerFileChange}
      />
    </div>
  )
}
export default Upload
