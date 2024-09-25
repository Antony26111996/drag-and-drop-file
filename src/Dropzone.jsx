import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css'

const Dropzone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      handleFileUpload(acceptedFiles); // Call the file upload handler
    },
    accept: '.pdf, .jpeg, .jpg, .zip',
    multiple: true,
  });

  const handleFileUpload = (acceptedFiles) => {
    // Log files for now; you can add logic to handle the files (e.g., upload to server)
    console.log('Files uploaded:', acceptedFiles);
  };

  return (
    <Grid item xs={6} sx={{ paddingBottom: '20px' }}>
      <div className="attachment-section">
        <Typography variant="h6" gutterBottom>
          Attachments
        </Typography>
        <div className="attachment-input-container" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop files or click to upload</p>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Dropzone;
