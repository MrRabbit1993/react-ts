import React, { useRef, useState } from 'react'
import UploadList from './uploadList'
import Dragger from './dragger'
import axios from 'axios'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }
export * from './type'
var Upload = function (props) {
  var action = props.action,
    onProgress = props.onProgress,
    onError = props.onError,
    onSuccess = props.onSuccess,
    beforeUpload = props.beforeUpload,
    onChange = props.onChange,
    defaultFileList = props.defaultFileList,
    onRemove = props.onRemove,
    headers = props.headers,
    name = props.name,
    data = props.data,
    withCredentials = props.withCredentials,
    accept = props.accept,
    multiple = props.multiple,
    children = props.children,
    drag = props.drag
  var fileInput = useRef(null)
  var _a = useState(defaultFileList || []),
    fileList = _a[0],
    setFileList = _a[1]
  // 更新文件列表
  var uploadFileList = function (updateFile, updateObj) {
    setFileList(function (prevList) {
      return prevList.map(function (file) {
        if (file.uid === updateFile.uid) {
          return __assign(__assign({}, file), updateObj)
        } else {
          return file
        }
      })
    })
  }
  var handlerClick = function () {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  var handlerFileChange = function (e) {
    var files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files) // 上传文件
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  var uploadFiles = function (files) {
    var postFiles = Array.from(files)
    postFiles.forEach(function (file) {
      if (!beforeUpload) {
        postFile(file)
      } else {
        var result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(function (processedFile) {
            postFile(processedFile)
          })
        } else if (result !== false) {
          postFile(file)
        }
      }
    })
  }
  var postFile = function (file) {
    var _file = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // setFileList([_file, ...fileList])
    setFileList(function (prevList) {
      return __spreadArrays([_file], prevList)
    })
    var formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(function (key) {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: __assign(__assign({}, headers), {
          'Content-type': 'multipart/form-data'
        }),
        withCredentials: withCredentials,
        onDownloadProgress: function (e) {
          var percentage = Math.round((e.loaded * 100) / e.total) || 0
          if (percentage < 100) {
            uploadFileList(_file, { percent: percentage, status: 'uploading' })
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(percentage, file)
          }
        }
      })
      .then(function (resp) {
        uploadFileList(_file, { status: 'success', response: resp.data })
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(resp.data, file)
        onChange === null || onChange === void 0 ? void 0 : onChange(file)
      })
      .catch(function (err) {
        uploadFileList(_file, { status: 'error', error: err })
        onError === null || onError === void 0 ? void 0 : onError(err, file)
        onChange === null || onChange === void 0 ? void 0 : onChange(file)
      })
  }
  var handlerRemove = function (file) {
    setFileList(function (prevList) {
      return prevList.filter(function (item) {
        return item.uid !== file.uid
      })
    })
    onRemove === null || onRemove === void 0 ? void 0 : onRemove(file)
  }
  return React.createElement(
    'div',
    { className: 'viking-upload-component' },
    React.createElement(
      'div',
      {
        className: 'viking-upload-input',
        style: { display: 'inline-block' },
        onClick: handlerClick
      },
      drag
        ? React.createElement(
            Dragger,
            {
              onFile: function (files) {
                uploadFiles(files)
              }
            },
            children
          )
        : children
    ),
    React.createElement('input', {
      className: 'viking-file-input',
      style: { display: 'none' },
      type: 'file',
      accept: accept,
      multiple: multiple,
      ref: fileInput,
      onChange: handlerFileChange
    }),
    React.createElement(UploadList, {
      fileList: fileList,
      onRemove: handlerRemove
    })
  )
}
Upload.defaultProps = {
  name: 'file'
}
export default Upload
