import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const UPLOAD_FILE = gql`
  mutation uploadFile($userid: ID!, $token: String!, $upload: Upload!) {
    uploadFile(userid: $userid, token: $token, upload: $upload) {
      url
      mimetype
      encoding
    }
  }
`;

export const UploadFile = () => {
  const [uploadFile,  { data }] = useMutation(UPLOAD_FILE, {});

  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), upload: file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <div className="Text">Suelta la imagen aquí</div> : <div className="Text">Arrastra una imagen o clicka para seleccionarla</div>}
      {data ? <div>url: {data.uploadFile.url} mimetype: {data.uploadFile.mimetype} encoding: {data.uploadFile.encoding}</div> : null}
    </div>
  );
};
