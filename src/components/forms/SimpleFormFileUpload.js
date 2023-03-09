import { useRef, useState } from "react";
const ALLOWEDFILES = ['jpg', 'png', 'jpeg', 'gif']


const PreviewImage = (props) => {
    return (
        <div className="text-center container w-25 mb-4">
            <h4 className='text-danger'>{props.errorMessage}</h4>
            <img src={props.file} className='rounded-circle img-fluid'/>
        </div>
    );
}

const SimpleFormFileUpload = () => {
    const [ preview, setPreview ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
    const fileRef = useRef(null)


    const validFile = () => {
        return preview ? true : false
    }

    const previewImage = (event) => {
        let file = event.target.files[0]
        let extension = file.name.split('.').slice(-1)[0]
        if (file && !ALLOWEDFILES.includes(extension)) {
            setErrorMessage('Only Images are allowed!')
            setPreview('')
            event.target.value = null
            return
        }
        setErrorMessage('')
        setPreview(URL.createObjectURL(file))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        alert("File Uploaded")
        fileRef.current.value = null
        setPreview('')
        setErrorMessage('')
    }

    return (
        <div>
            <h2>Simple form application with file upload</h2>
            <p> No third party library used. </p>
            <hr/>
            <PreviewImage file={preview} errorMessage={errorMessage}/>
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={fileRef} className="form-control" type='file' onChange={ previewImage }/>
                </div>
                <input className='btn btn-primary' type="submit" value="upload" onChange={ previewImage } disabled={!validFile()}/>
            </form>
        </div>
    );

}


export default SimpleFormFileUpload;