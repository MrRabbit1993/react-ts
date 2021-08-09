import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { UploadFile, UploadProps } from './type'
import Button, { ButtonType } from './../Button'
import UploadList from './uploadList'
import axios from 'axios'
export * from './type'
const Upload: FC<UploadProps> = (props) => {
  const { action, onProgress, onError, onSuccess, beforeUpload, onChange, defaultFileList, onRemove } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  // 更新文件列表
  const uploadFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
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
      if (!beforeUpload) {
        postFile(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            postFile(processedFile)
          })
        } else if (result !== false) {
          postFile(file)
        }
      }
    })
  }
  const postFile = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
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
            uploadFileList(_file, { percent: percentage, status: 'uploading' })
            onProgress?.(percentage, file)
          }
        }
      })
      .then((resp) => {
        console.log(resp)
        uploadFileList(_file, { status: 'success', response: resp.data })
        onSuccess?.(resp.data, file)
        onChange?.(file)
      })
      .catch((err) => {
        uploadFileList(_file, { status: 'error', error: err })
        onError?.(err, file)
        onChange?.(file)
      })
  }
  const handlerRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid)
    })
    onRemove?.(file)
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
      <UploadList fileList={fileList} onRemove={handlerRemove} />
    </div>
  )
}
export default Upload
