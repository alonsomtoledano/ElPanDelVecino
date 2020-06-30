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

const url = `${process.env.REACT_APP_API_URL.split([":"])[0]}:${process.env.REACT_APP_API_URL.split([":"])[1]}`;

const UploadFile = () => {
  const [uploadFile,  { data }] = useMutation(UPLOAD_FILE, {});

  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), upload: file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  let field;
  if (data) {
    field = <img className="Img" src={url + data.uploadFile.url} alt={data.uploadFile.mimetype}/>
  } else {
    field =
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <div className="Text">Suelta la imagen aquí</div> : <div className="Text">Arrastra una imagen o haz click para seleccionarla</div>}
    </div>
  }

  return (
    <div>
      {field}
    </div>
  );
};

export default UploadFile;